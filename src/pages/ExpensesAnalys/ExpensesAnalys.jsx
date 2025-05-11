import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import ExpenseBarChart from "../../components/ExpenseBarChart/ExpenseBarChart";
import * as S from "./styledComponents";
import React, { useEffect } from "react";
import { useTransactions } from "../../providers/TransactionsProvider";
import { getUserToken, dateFormat } from "../../utils/utils";
import { getTransactionsPeriod } from "../../services/api/transactions";

const ExpensesAnalys = () => {
  const { setTransactions, transactions } = useTransactions();

  useEffect(() => {
    if (transactions.length === 0) {
      getTransactionsPeriod({
        token: getUserToken(),
        start: dateFormat(new Date()),
        end: dateFormat(new Date()),
      }).then((data) => {
        setTransactions(data);
      });
    }
  }, []);

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Title>Анализ расходов</S.Title>
        <S.ContentContainer>
          <Calendar />
          <ExpenseBarChart />
        </S.ContentContainer>
      </S.Wrapper>
    </>
  );
};

export default ExpensesAnalys;
