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

const testData = [
  { category: "Еда", amount: 21990 },
  { category: "Транспорт", amount: 11046 },
  { category: "Жилье", amount: 0 },
  { category: "Развлечения", amount: 13050 },
  { category: "Образование", amount: 0 },
  { category: "Другое", amount: 19106 },
];

const COLORS = [
  "#D9B6FF",
  "#FFB53D",
  "#6EE4FE",
  "#B0AEFF",
  "#BCEC30",
  "#FFB9B8",
];

const ExpenseBarChart = () => {
  const total = testData.reduce((sum, item) => sum + item.amount, 0);
  const barWidth = 94;
  const barGap = 32;
  const chartWidth = testData.length * (barWidth + barGap);

  return (
    <S.Container>
      <S.Header>
        <S.TotalAmount>{total.toLocaleString("ru-RU")} ₽</S.TotalAmount>
        <S.Period>Расходы за 29 июня 2024 — 4 августа 2024</S.Period>
      </S.Header>

      <S.Wrapper>
        <BarChart
          width={chartWidth}
          height={420}
          data={testData}
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
            {testData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
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
