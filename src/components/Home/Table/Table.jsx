import React, { useCallback, useEffect, useState } from "react";
import {
  ColumnTitleC,
  ColumnTitleD,
  ColumnTitleP,
  ColumnTitleS,
  Line,
  Scroll,
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
import { useTransactions } from "../../../providers/TransactionsProvider";

const filterKeys = ["food", "transport", "housing", "joy", "education", "others"];

const filterNames = {
  food: "Еда",
  transport: "Транспорт",
  housing: "Жилье",
  joy: "Развлечения",
  education: "Образование",
  others: "Другое",
};

const sortingKeys = ["date", "sum"];

const sortingNames = {
  date: "Дате",
  sum: "Сумме",
};

export function Table({ currentRow, setCurrentRow }) {
  const { transactions, setTransactions } = useTransactions();
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

  const readRecords = useCallback((token) => {
    TransactionsAPI.readAll({
      token,
      sorting,
      filters: filterKeys.reduce((acc, key) => {
        if (filterValues[key])
          acc.push(key);

        return acc;
      }, []),
    }).then((data) => {
      setTransactions(data);
    });
  }, [sorting, filters, filterValues])

  useEffect(() => {
    const token = getUserToken();

    readRecords(token);
  }, [sorting, filters, filterValues]);

  function onClickCategory(type) {
    filterValues[type] = !filterValues[type];

    let values = [];

    for (const key of filterKeys) {
      if (filterValues[key])
        values.push(filterNames[key]);
    }

    setFilters(values.join(", "));
  }

  function onClickSortOption(type) {
    if (sorting !== type)
      setSorting(type);
    else
      setSorting("");

    setTimeout(() => setOpenedMenu(""), 300);
  }

  return (
    <>
      <STable onClick={() => setOpenedMenu("")}>
        <TableItem>
          <TableName>Таблица расходов</TableName>
          <TableNav>
            <FilterLine name={"filter"} title={"Фильтровать по категории"}
                        selectedText={filters.toLowerCase()}
                        isOpened={openedMenu === "filter"} setOpened={setOpenedMenu}>
              {
                filterKeys.map((key) => ( 
                  <CategoryButton key={key} type={key} title={filterNames[key]}
                                  isActive={filterValues[key]} onClick={() => onClickCategory(key)} />
                ))
              }
            </FilterLine>
            <FilterLine name={"sorting"} title={"Сортировать по"}
                        selectedText={sortingNames[sorting]?.toLowerCase()} 
                        isOpened={openedMenu === "sorting"} setOpened={setOpenedMenu}>
              {
                sortingKeys.map((key) => ( 
                  <CategoryButton key={key} type={key} title={sortingNames[key]}
                                  isActive={sorting === key} onClick={() => onClickSortOption(key)} />
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
                <TableRow key={item._id} id={item._id} {...item}
                          readRecords={readRecords}
                          currentRow={currentRow === item._id} setCurrentRow={setCurrentRow} />
              ))
            }
          </TableContent>
        </Scroll>
      </STable>
    </>
  );
}
