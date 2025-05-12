import React from "react";
import * as S from "./styledComponents";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  Cell,
} from "recharts";
import { useTransactions } from "../../providers/TransactionsProvider";
import { categoryTypes, categoryTypeColors } from "../../../enums";

const ExpenseBarChart = ({ selectedRange }) => {
  const { transactions } = useTransactions();

  const chartData = Object.keys(categoryTypes).map((key) => {
    const total = transactions
      .filter((t) => t.category === key)
      .reduce((sum, t) => sum + t.sum, 0);

    return {
      categoryKey: key,
      category: categoryTypes[key],
      amount: total,
    };
  });

  const total = chartData.reduce((sum, item) => sum + item.amount, 0);
  const barWidth = 94;
  const barGap = 32;
  const chartWidth = chartData.length * (barWidth + barGap);

  const formatRange = () => {
    if (selectedRange?.[0] && selectedRange?.[1]) {
      return `${selectedRange[0].toLocaleDateString(
        "ru-RU"
      )} — ${selectedRange[1].toLocaleDateString("ru-RU")}`;
    }
    return "Выберите период";
  };

  return (
    <S.Container>
      <S.Header>
        <S.TotalAmount>{total.toLocaleString("ru-RU")} ₽</S.TotalAmount>
        <S.Period>Расходы за {formatRange()}</S.Period>
      </S.Header>

      <S.Wrapper>
        <BarChart
          width={chartWidth}
          height={420}
          data={chartData}
          margin={{ top: 40, right: 20, left: 20, bottom: 0 }}
          barCategoryGap={barGap}
        >
          <XAxis
            dataKey="category"
            tick={{ fill: "#1a1a1a", fontSize: 14 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Bar
            dataKey="amount"
            radius={[10, 10, 10, 10]}
            minPointSize={6}
            barSize={barWidth}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={categoryTypeColors[entry.categoryKey]}
              />
            ))}
            <LabelList
              dataKey="amount"
              position="top"
              content={({ x, y, width, value }) => {
                const offset = value === 0 ? -8 : -12;
                return (
                  <S.StyledLabel
                    x={x + width / 2}
                    y={y + offset}
                    textAnchor="middle"
                  >
                    {`${value.toLocaleString("ru-RU")} ₽`}
                  </S.StyledLabel>
                );
              }}
            />
          </Bar>
        </BarChart>
      </S.Wrapper>
    </S.Container>
  );
};

export default ExpenseBarChart;
