import styled from "styled-components";

export const STable = styled.div`
  width: 789px;
  height: 618px;
  top: 180px;
  left: 118px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const TableItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 34px;
  padding-bottom: 30px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const TableName = styled.h2`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  width: 238px;
  height: 29px;
`;

export const TableNav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SelectName = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  margin: 0px;
  text-wrap: nowrap;
  height: 18px;
  display: flex;
  align-items: baseline;
  gap: 8px;

  span:nth-child(2) {
    color: #1fa46c;
    font-weight: 600;
    line-height: 150%;
    text-decoration: underline;
    text-underline-offset: 4px;
    max-width: 100px;
    overflow-x: clip;
    text-overflow: ellipsis;
  }
`;

export const SelectButtons = styled.div`
  border-radius: 6px;
  border-width: 0.5px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  background: #fff;
  border: 0.5px solid #999;
  position: absolute;
  translate: 0 24px;
  box-shadow: 0px 20px 67px -12px #00000021;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding-left: 32px;
  padding-bottom: 7px;
`;

export const ColumnTitleS = styled.p`
  color: #999;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  margin: 0px;
  width: 141px;
  height: 15px;
`;

export const ColumnTitleC = styled.p`
  color: #999;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  margin: 0px;
  width: 141px;
  height: 15px;
`;

export const ColumnTitleD = styled.p`
  color: #999;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  margin: 0px;
  width: 142px;
  height: 15px;
`;

export const ColumnTitleP = styled.p`
  color: #999;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  margin: 0px;
  width: 134px;
  height: 15px;
`;

export const Line = styled.hr`
  width: 789;
  top: 114px;
  border-width: 0.5px;
  color: #999;
  margin: 0px;
`;

export const Scroll = styled.div`
  width: 789px;
  height: 479px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 30px;
  }
`;

export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  padding-right: 20px;
  padding-left: 34px;
  height: 28px;
  &:hover {
    background: #dbffe9;
  }
  &:hover p {
    color: #1fa46c;
  }
  &:hover svg path {
    fill: #1fa46c;
  }
`;

export const ColumnSpace = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #000000;
  margin: 0px;
  width: 141px;
  height: 15px;
`;

export const ColumnProduct = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #000000;
  margin: 0px;
  width: 141px;
  height: 15px;
`;

export const ColumnDate = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #000000;
  margin: 0px;
  width: 142px;
  height: 15px;
`;

export const ColumnPrice = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #000;
  margin: 0px;
  width: 134px;
  height: 15px;

  &:after {
    content: "₽";
  }
`;

export const STableRow = styled.div`
  background-color: ${(props) =>
    props.$currentRow ? "#dbffe9" : "transparent"};
  & div:nth-child(4) p::after {
    content: "₽";
  }
`;

export const ColumnElements = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Redaction = styled.div`
  cursor: pointer;
`;

export const Cart = styled.div`
  cursor: pointer;
`;
