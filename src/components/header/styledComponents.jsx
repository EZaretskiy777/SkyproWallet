import styled from "styled-components";
import { Link } from "react-router";

export const Header = styled.header`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 120px 0 120px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const HeaderBlock = styled.div`
  height: 64px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div``;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
  letter-spacing: 0px;
  text-align: center;
  color: #000000;
`;

export const HeaderLogoImg = styled.img`
  height: 19px;
`;

export const HeaderNav = styled.nav`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

export const HeaderBtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;

export const HeaderUserBtn = styled.button`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  border: none;
  background: transparent;

  &:hover {
    background-color: #f0f0f0;
  }

  &:hover::after {
    background-color: #f0f0f0;
  }
`;
