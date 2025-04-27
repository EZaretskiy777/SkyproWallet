import React from "react";
import * as S from "./styledComponents";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  ResponsiveContainer,
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
  "#D6B1FF",
  "#FBC252",
  "#C1C1C1",
  "#BEB1FF",
  "#C1C1C1",
  "#FFB1B1",
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <S.StyledTooltipWrapper>
        <S.TooltipItem>{`${payload[0].value.toLocaleString()} ₽`}</S.TooltipItem>
      </S.StyledTooltipWrapper>
    );
  }
  return null;
};

const ExpenseBarChart = () => {
  const total = testData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <S.Container>
      <S.Header>
        <S.TotalAmount>{total.toLocaleString()} ₽</S.TotalAmount>
        <S.Period>Расходы за 29 июня 2024 — 4 августа 2024</S.Period>
      </S.Header>

      <ResponsiveContainer width="100%" height={380}>
        <BarChart
          data={testData}
          margin={{ top: 40, right: 20, left: 20, bottom: 0 }}
          barCategoryGap="20%"
        >
          <XAxis
            dataKey="category"
            tick={{
              fill: "#1a1a1a",
              fontSize: 14,
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
          <Bar dataKey="amount" radius={[10, 10, 10, 10]} minPointSize={6}>
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
                    {`${value.toLocaleString()} ₽`}
                  </S.StyledLabel>
                );
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </S.Container>
  );
};

export default ExpenseBarChart;
