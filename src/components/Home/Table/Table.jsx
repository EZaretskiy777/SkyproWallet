import React, { useEffect, useState } from "react";
import {
  ColumnTitleC,
  ColumnTitleD,
  ColumnTitleP,
  ColumnTitleS,
  Line,
  Scroll,
  Select,
  SelectElement,
  SelectName,
  SelectWrapper,
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

export function Table() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const token = getUserToken();

    TransactionsAPI.readAll({
      // token: getUserToken(),
      token,
    }).then((data) => {
      setTransactions(data);
      // if (data.length === 0)
      // TransactionsAPI.createOne({
      //   token,
      //   transaction: {
      //     description: "Пятерочка",
      //     sum: 2300,
      //     category: "joy",
      //     date: new Date(2024,4,12),
      //   }
      // })
    });
  }, []);

  return (
    <>
      <STable>
        <TableItem>
          <TableName>Таблица расходов</TableName>
          <TableNav>
            <SelectWrapper>
              <Select>
                <SelectName>Фильтровать по категории</SelectName>
                <SelectElement />
              </Select>
            </SelectWrapper>
            <SelectWrapper>
              <Select>
                <SelectName>Сортировать по дате</SelectName>
                <SelectElement />
              </Select>
            </SelectWrapper>
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
      </STable>
    </>
  );
}
