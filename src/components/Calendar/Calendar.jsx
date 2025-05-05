import * as S from "./styledComponents";
import React, { useState } from "react";
import {
  format,
  addDays,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameDay,
  isToday,
  addMonths,
  subMonths,
  addYears,
  subYears,
  isSameMonth,
  getYear,
  setMonth,
  isAfter,
  isBefore,
} from "date-fns";
import { ru } from "date-fns/locale";

function CustomCalendar() {
  const [mode, setMode] = useState("month");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [range, setRange] = useState([null, null]);

  const handleDateClick = (day) => {
    const [start, end] = range;
    if (!start || (start && end)) {
      setRange([day, null]);
    } else if (start && !end) {
      setRange(day > start ? [start, day] : [day, start]);
    }
  };

  const handleMonthClick = (year, monthIndex) => {
    const date = setMonth(new Date(year, 0, 1), monthIndex);
    const [start, end] = range;
    if (!start || (start && end)) {
      setRange([date, null]);
    } else if (start && !end) {
      setRange(date > start ? [start, date] : [date, start]);
    }
  };

  const renderMonth = (date) => {
    const startMonth = startOfMonth(date);
    const endMonth = endOfMonth(startMonth);
    const startDate = startOfWeek(startMonth, { locale: ru });
    const endDate = endOfWeek(endMonth, { locale: ru });

    const days = [];
    let day = startDate;
    while (day <= endDate) {
      const clone = day;
      const [start, end] = range;
      const isSelected =
        (start && isSameDay(day, start)) || (end && isSameDay(day, end));
      const isInRange = start && end && day > start && day < end;

      const isInCurrentMonth = isSameMonth(day, startMonth);

      if (isInCurrentMonth) {
        days.push(
          <S.DateButton
            key={day}
            onClick={() => handleDateClick(clone)}
            isSelected={isSelected}
            isInRange={isInRange}
            isToday={isToday(day)}
          >
            {format(day, "d", { locale: ru })}
          </S.DateButton>
        );
      }
      day = addDays(day, 1);
    }

    return (
      <S.MonthYearTitle key={date}>
        <S.MonthYear>{format(date, "LLLL yyyy", { locale: ru })}</S.MonthYear>
        <S.CalendarGrid>{days}</S.CalendarGrid>
      </S.MonthYearTitle>
    );
  };

  const renderMonthsView = () => {
    const months = [];
    for (let i = -1; i <= 1; i++) {
      const month = addMonths(currentDate, i);
      months.push(renderMonth(month));
    }
    return months;
  };

  const renderYearsView = () => {
    const currentYear = getYear(currentDate);
    const years = [currentYear - 1, currentYear, currentYear + 1];

    return years.map((year) => (
      <S.YearSection key={year}>
        <S.YearTitle>{year}</S.YearTitle>
        <S.MonthsGrid>
          {Array.from({ length: 12 }).map((_, index) => {
            const monthDate = new Date(year, index, 1);
            const [start, end] = range;
            const isSelected =
              (start &&
                start.getFullYear() === year &&
                start.getMonth() === index) ||
              (end && end.getFullYear() === year && end.getMonth() === index);
            const isInRange =
              start &&
              end &&
              (isAfter(monthDate, start) || isSameDay(monthDate, start)) &&
              (isBefore(monthDate, end) || isSameDay(monthDate, end));

            return (
              <S.MonthButton
                key={index}
                onClick={() => handleMonthClick(year, index)}
                isSelected={isSelected}
                isInRange={isInRange}
              >
                {format(monthDate, "LLLL", { locale: ru })}
              </S.MonthButton>
            );
          })}
        </S.MonthsGrid>
      </S.YearSection>
    ));
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Период</S.Title>

        <S.NavigationControls>
          <S.NavButton
            onClick={() =>
              mode === "month"
                ? setCurrentDate(subMonths(currentDate, 1))
                : setCurrentDate(subYears(currentDate, 1))
            }
          >
            {"<"}
          </S.NavButton>
          <S.NavButton
            onClick={() =>
              mode === "month"
                ? setCurrentDate(addMonths(currentDate, 1))
                : setCurrentDate(addYears(currentDate, 1))
            }
          >
            {">"}
          </S.NavButton>
        </S.NavigationControls>
        <S.ModeSwitch>
          <S.ModeButton
            active={mode === "month"}
            onClick={() => setMode("month")}
          >
            Месяц
          </S.ModeButton>
          <S.ModeButton
            active={mode === "year"}
            onClick={() => setMode("year")}
          >
            Год
          </S.ModeButton>
        </S.ModeSwitch>
      </S.Header>

      {mode === "month" && (
        <S.DayNames>
          {["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </S.DayNames>
      )}

      <S.ScrollContainer>
        {mode === "month" && renderMonthsView()}
        {mode === "year" && renderYearsView()}
      </S.ScrollContainer>
    </S.Wrapper>
  );
}

export default CustomCalendar;
