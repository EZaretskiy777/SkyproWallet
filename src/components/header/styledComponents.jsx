import styled from "styled-components";
import { NavLink } from "react-router";

export const Header = styled.header`
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 calc(50% - 600px) 0 calc(50% - 600px);
  background-color: #ffffff;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;

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
`;

export const HeaderLogo = styled.div``;

export const HeaderLink = styled(NavLink).attrs(() => ({
  className: ({ isActive }) => (isActive ? "active" : ""),
}))`
  text-decoration: none;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
  text-align: center;
  color: #000000;
  text-underline-offset: 5px;

  &.active {
    text-decoration: underline;
    font-weight: 600;
    color: #1fa46c;
  }
`;

export const HeaderLogoImg = styled.img`
  display: flex;
  align-items: center;
  height: 19px;
`;

export const HeaderNav = styled.nav`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

export const HeaderBtn = styled.button`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  line-height: 170%;
  letter-spacing: 0px;
  text-align: center;
  border: none;
  background: transparent;
`;
