import Header from "../../components/Header/Header.jsx";
import { routesPath } from "../../lib/routesPath.js";
import * as S from "./LoginPage.styled.js";
import { Link } from "react-router-dom";
//import { loginAuth } from "../../services/Api.js";

export const LoginPage = ({ login }) => {
  return (
    <>
      <Header/>
      <S.Wrapper>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Вход</h2>
              </S.ModalTtl>
              <S.ModalFormLogin id="formLogIn" action="#">
                <S.ModalInput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalBtnEnter id="btnEnter">
                  <S.ModalBtnEnterA
                    onClick={login}
                    //  logout={login}
                  >
                    Войти
                  </S.ModalBtnEnterA>
                </S.ModalBtnEnter>
                <S.ModalFormGroup>
                  <S.ModalFormGroupAP>
                    Нужно зарегистрироваться?
                  </S.ModalFormGroupAP>
                  <Link to={routesPath.REGISTER}>
                    <S.ModalFormGroupA>
                      Регистрируйтесь здесь
                    </S.ModalFormGroupA>
                  </Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        
      </S.Wrapper>
    </>
  );
};
