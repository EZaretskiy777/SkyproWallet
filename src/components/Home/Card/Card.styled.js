import styled from "styled-components";

export const SCard = styled.div`
  width: 379px;
  height: 618px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const CardContainer = styled.form`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CardTitle = styled.h2`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
  vertical-align: middle;
`;

export const CardBox = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
`;

export const InputSpace = styled.input`
  border-radius: 6px;
  gap: 12px;
  border-width: 0.5px;
  padding: 12px;
  border: 0.5px solid;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  background: ${(props) =>
    props.$status === "error"
      ? "rgba(255, 235, 235, 1)"
      : props.$status === "filled"
      ? "#dbffe9"
      : "#fff"};
  border-color: ${(props) =>
    props.$status === "error"
      ? "red"
      : props.$status === "filled"
      ? "rgba(31, 164, 108, 1)"
      : "rgba(153, 153, 153, 1)"};

  &::placeholder {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #999;
  }
`;

export const ProductBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const ButtonProduct = styled.div`
  max-width: 152px;
  height: 31px;
  border-radius: 30px;
  padding-top: 8px;
  padding-right: 20px;
  padding-bottom: 8px;
  padding-left: 20px;
  background: #f4f5f6;
  border: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  p {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    margin: 0px;
  }

  &.active,
  &:hover {
    background: #dbffe9;
    color: #1fa46c;

    svg path {
      fill: #1fa46c;
    }
  }
`;

export const InputDate = styled.input`
  border-radius: 6px;
  gap: 12px;
  border-width: 0.5px;
  padding: 12px;
  border: 0.5px solid;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  background: ${(props) =>
    props.$status === "error"
      ? "rgba(255, 235, 235, 1)"
      : props.$status === "filled"
      ? "#dbffe9"
      : "#fff"};
  border-color: ${(props) =>
    props.$status === "error"
      ? "red"
      : props.$status === "filled"
      ? "rgba(31, 164, 108, 1)"
      : "rgba(153, 153, 153, 1)"};
  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
  &::placeholder {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #999;
  }
  // &:hover {
  //   background: #dbffe9;
  //   color: rgb(0, 0, 0);
  //   border: 0.5px solid #1fa46c;
  // }
`;

export const InputPrice = styled.input`
  border-radius: 6px;
  gap: 12px;
  border-width: 0.5px;
  padding: 12px;
  border: 0.5px solid #999;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  background: ${(props) =>
    props.$status === "error"
      ? "rgba(255, 235, 235, 1)"
      : props.$status === "filled"
      ? "#dbffe9"
      : "#fff"};
  border-color: ${(props) =>
    props.$status === "error"
      ? "red"
      : props.$status === "filled"
      ? "rgba(31, 164, 108, 1)"
      : "rgba(153, 153, 153, 1)"};

  &::placeholder {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #999;
  }
  // &:hover {
  //   background: #dbffe9;
  //   color: rgb(0, 0, 0);
  //   border: 0.5px solid #1fa46c;
  // }
`;

export const ButtonNewContent = styled.button`
  width: 313px;
  height: 39px;
  border-radius: 6px;
  gap: 12px;
  padding: 12px;
  background: #1fa46c;
  border: 0px;

  p {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    color: #fff;
    margin: 0px;
  }

  &:disabled {
    background: rgba(153, 153, 153, 1);
  }
`;

export const InputNameBlock = styled.div`
  margin-bottom: 16px;
`;

export const ErrorFieldSpan = styled.div`
  color: red;
  font-size: 10px;
  margin: 0px;
  paddint: 0px;
`;

export const ErrorSpan = styled.span`
  color: red;
`;
