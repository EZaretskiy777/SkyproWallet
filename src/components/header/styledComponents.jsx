import styled from "styled-components";
import { NavLink } from "react-router";

export const Header = styled.header`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 120px 0 120px;
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

export const HeaderLink = styled(NavLink)`
  text-decoration: ${(props) => (props.$isActive ? "underline" : "none")};
  font-family: Montserrat;
  font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  font-size: 14px;
  line-height: 170%;
  letter-spacing: 0px;
  text-align: center;
  color: ${(props) => (props.$isActive ? "#1FA46C" : "#000000")};
  text-underline-offset: 5px;
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
