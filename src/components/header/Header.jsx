import * as S from "./styledComponents";

const Header = () => {
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
            <S.HeaderLink to="/newcard">Мои расходы</S.HeaderLink>
            <S.HeaderLink to="/newcard">Анализ расходов</S.HeaderLink>
          </S.HeaderNav>
          <S.HeaderBtn onMouseDown={(e) => e.stopPropagation()}>
            Выйти
          </S.HeaderBtn>
        </S.HeaderBlock>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
