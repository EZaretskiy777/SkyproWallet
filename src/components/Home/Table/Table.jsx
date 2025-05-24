import React, { useEffect, useState } from "react";
import {
  ColumnTitleC,
  ColumnTitleD,
  ColumnTitleP,
  ColumnTitleS,
  Line,
  Scroll,
  Select,
  SelectButtons,
  SelectName,
  STable,
  TableContent,
  TableItem,
  TableName,
  TableNav,
  TitleBox,
} from "./Table.styled";
import TransactionsAPI from "../../../services/api/transactionsAPI";
import { getUserToken } from "../../../utils/utils";
import { TableRow } from "./TableRow/TableRow";
import { CategoryButton } from "../../UX/CategoryButton";
import { FilterLine } from "../../UX/FilterLine";

const filterKeys = ["food", "transport", "housing", "joy", "education", "others"]

const filterNames = {
  food: "Еда",
  transport: "Транспорт",
  housing: "Жилье",
  joy: "Развлечения",
  education: "Образование",
  others: "Другое",
}

const sortingKeys = ["date", "sum"]

const sortingNames = {
  date: "Дате",
  sum: "Сумме",
}

export function Table() {
  const [transactions, setTransactions] = useState([]);
  const [filterValues] = useState({
    food: false,
    transport: false,
    housing: false,
    joy: false,
    education: false,
    others: false,
  });
  const [filters, setFilters] = useState("");
  const [sorting, setSorting] = useState("");
  const [openedMenu, setOpenedMenu] = useState("");

  useEffect(() => {
    const token = getUserToken();

    TransactionsAPI.readAll({
      token,
      sorting,
      filters: filterKeys.reduce((acc, key) => {
        if (filterValues[key])
          acc.push(key)
        return acc
      }, []),
    }).then((data) => {
      setTransactions(data)
    });
  }, [sorting, filters, filterValues]);

  function onClickCategory(event) {
    let element = event.target

    if (element.localName !== "button")
      element = element.closest("button")

    const type = element.dataset.type

    filterValues[type] = !filterValues[type]

    let values = []

    for (const key of filterKeys) {
      if (filterValues[key]) 
        values.push(filterNames[key])
    }

    setFilters(values.join(", "))
  }

  function onClickSortOption(event) {
    let element = event.target

    if (element.localName !== "button")
      element = element.closest("button")

    const type = element.dataset.type

    if (sorting !== type)
      setSorting(type)
    else
      setSorting("")

    setTimeout(() => setOpenedMenu(""), 300)
  }

return (
  <>
    <STable onClick={() => setOpenedMenu("")}>
      <TableItem>
        <TableName>Таблица расходов</TableName>
        <TableNav>
          <FilterLine
          name={"filter"} 
          title={"Фильтровать по категории"} 
          selectedText={filters.toLowerCase()} 
          isOpened={openedMenu === "filter"} 
          setOpened={setOpenedMenu}>
            {
              filterKeys.map((key) => ( 
                <CategoryButton key={key} type={key} title={filterNames[key]} isActive={filterValues[key]} onClick={onClickCategory} />
              ))
            }
          </FilterLine>
          <FilterLine 
          name={"sorting"} 
          title={"Сортировать по"}
          selectedText={sortingNames[sorting]?.toLowerCase()} 
          isOpened={openedMenu === "sorting"} 
          setOpened={setOpenedMenu}>
            {
              sortingKeys.map((key) => ( 
                <CategoryButton key={key} type={key} title={sortingNames[key]} isActive={sorting === key} onClick={onClickSortOption} />
              ))
            }
          </FilterLine>
        </TableNav>
      </TableItem>
      <TitleBox>
        <ColumnTitleS>Описание</ColumnTitleS>
        <ColumnTitleC>Категория</ColumnTitleC>
        <ColumnTitleD>Дата</ColumnTitleD>
        <ColumnTitleP>Сумма</ColumnTitleP>
      </TitleBox>
      <Line />
      <Scroll>
        <TableContent>
          {
            transactions.map((item) => (
              <TableRow key={item._id} id={item._id} {...item} />
            ))
          }
        </TableContent>
      </Scroll>
    </STable >
  </>
);
}
