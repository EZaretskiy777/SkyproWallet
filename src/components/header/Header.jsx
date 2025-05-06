import * as S from "./styledComponents";
import { useAuth } from "../../providers/AuthProvider";

const Header = () => {
  const { IsAuth } = useAuth();
  //console.log("header", IsAuth)
  return (

    <S.Header>
      <S.HeaderContainer>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <S.HeaderLink to="/">
              <S.HeaderLogoImg src={"/logo.svg"} alt="logo" />
            </S.HeaderLink>
          </S.HeaderLogo>
          <S.HeaderNav>
           { IsAuth && <> <S.HeaderLink to="/">Мои расходы</S.HeaderLink>
            <S.HeaderLink
              $isActive={({ isActive }) => (isActive ? "Y" : "N")}
              to="/expensesanalys"
            >
              Анализ расходов
            </S.HeaderLink></>}
          </S.HeaderNav>
          { IsAuth && <S.HeaderBtn onMouseDown={(e) => e.stopPropagation()}>
            Выйти
          </S.HeaderBtn>}
        </S.HeaderBlock>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
