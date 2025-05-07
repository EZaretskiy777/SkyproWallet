import * as S from "./styledComponents";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

const Header = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuth();

  const exitHandler = () => {
    localStorage.setItem("userInfo", "");
    setIsAuth(false);
    navigate("/login");
  };

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
            {isAuth && (
              <>
                <S.HeaderLink to="/">Мои расходы</S.HeaderLink>
                <S.HeaderLink to="/expensesanalys">
                  Анализ расходов
                </S.HeaderLink>
              </>
            )}
          </S.HeaderNav>
          {isAuth && <S.HeaderBtn onClick={exitHandler}>Выйти</S.HeaderBtn>}
        </S.HeaderBlock>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
