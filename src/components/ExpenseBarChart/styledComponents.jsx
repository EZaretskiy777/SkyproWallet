import styled from "styled-components";
import { ResponsiveContainer } from "recharts";

export const Container = styled.div`
  height: 540px;
  width: 800px;
  max-width: 800px;
  padding: 40px 30px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0 20px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const Header = styled.div`
  text-align: left;
  margin-bottom: 30px;
  margin-left: 40px;
`;

export const TotalAmount = styled.h1`
  margin: 0;
  color: #1a1a1a;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const Period = styled.p`
  color: #888888;
  margin-top: 8px;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const StyledLabel = styled.text`
  font-size: 14px;
  font-weight: 600;
  fill: #1a1a1a;
`;

export const StyledTooltipWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const TooltipItem = styled.p`
  margin: 0;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 500;
`;
