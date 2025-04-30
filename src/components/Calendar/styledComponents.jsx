import styled from "styled-components";

export const Wrapper = styled.div`
  height: 540px;
  width: 379px;
  background: white;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  gap: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  flex-shrink: 0;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
`;

export const NavigationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavButton = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
  padding: 4px;
  &:hover {
    color: #000;
  }
`;

export const ModeSwitch = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: 8px;
`;

export const ModeButton = styled.button`
  background: none;
  border: none;
  font-size: 13px;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${({ active }) => (active ? "#1FA46C" : "#888")};
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  text-underline-offset: 5px;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
`;

export const DayNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #ddd;
  padding-bottom: 4px;
  margin-bottom: 8px;
  text-align: center;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
  margin-bottom: 12px;
`;

export const DateButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: ${({ isSelected, isInRange, isToday }) =>
    isSelected
      ? "#DBFFE9"
      : isInRange
      ? "#DBFFE9"
      : isToday
      ? "#e0f7e9"
      : "#F4F5F6"};
  color: #333;
  font-weight: normal;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  &:hover {
    background: #e0f7e9;
    transform: scale(0.95);
  }
`;

export const ScrollContainer = styled.div`
  max-height: 440px;
  overflow-y: auto;
  padding-right: 4px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 8px;
  }
`;

export const YearSection = styled.div`
  margin-bottom: 20px;
`;

export const YearTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

export const MonthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const MonthButton = styled.button`
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: ${({ isSelected, isInRange }) =>
    isSelected ? "#DBFFE9" : isInRange ? "#DBFFE9" : "#f7f7f7"};
  color: #333;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  font-size: 14px;
  &:hover {
    background: #f0f0f0;
    transform: scale(0.95);
  }
`;

export const MonthYearTitle = styled.div`
font-family: "Montserrat",
font-weight: "600",
font-size: "16px",
line-height: "100%",
letter-spacing: "0px",
margin: "8px 0",
`;

export const MonthYear = styled.div`
  padding-bottom: 12px;
  padding-top: 12px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
