import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import ExpenseBarChart from "../../components/ExpenseBarChart/ExpenseBarChart";
import * as S from "./styledComponents";
import React, { useEffect, useState } from "react";
import { useTransactions } from "../../providers/TransactionsProvider";
import { getUserToken, dateFormat } from "../../utils/utils";
import { getTransactionsPeriod } from "../../services/api/transactions";

const ExpensesAnalys = () => {
  //для PullRequest
  const { setTransactions } = useTransactions();
  const [range, setRange] = useState([new Date(), new Date()]);

  useEffect(() => {
    if (range[0] && range[1]) {
      getTransactionsPeriod({
        token: getUserToken(),
        start: dateFormat(range[0]),
        end: dateFormat(range[1]),
      }).then((data) => {
        setTransactions(data);
      });
    }
  }, [range]);

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Title>Анализ расходов</S.Title>
        <S.ContentContainer>
          <Calendar range={range} setRange={setRange} />
          <ExpenseBarChart selectedRange={range} />
        </S.ContentContainer>
      </S.Wrapper>
    </>
  );
};

export default ExpensesAnalys;
