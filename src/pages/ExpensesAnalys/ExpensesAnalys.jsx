import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import ExpenseBarChart from "../../components/ExpenseBarChart/ExpenseBarChart";
import * as S from "./styledComponents";

const ExpensesAnalys = () => {
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
