import { Link } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import * as S from "./RegisterPage.styled.js";
import { routesPath } from "../../lib/routesPath.js";

export const RegisterPage = () => {
  return (
    <>
      <Header/>
        <S.Wrapper>
            <S.Modal>
              <S.ModalBlock>
                <S.ModalTtl>
                  <h2>Регистрация</h2>
                </S.ModalTtl>
                <S.ModalFormLogin id="formLogUp" action="#">
                  <S.ModalInput
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Имя"
                  />
                  <S.ModalInput
                    type="text"
                    name="login"
                    id="loginReg"
                    placeholder="Эл. почта"
                  />
                  <S.ModalInput
                    type="password"
                    name="password"
                    id="passwordFirst"
                    placeholder="Пароль"
                  />
                  <Link to={routesPath.LOGIN}>
                    <S.ModalBtnRegisterEnter id="RegistrEnter">
                      <S.ModalBtnRegisterEnterA>
                        {" "}
                        Зарегистрироваться
                      </S.ModalBtnRegisterEnterA>
                    </S.ModalBtnRegisterEnter>
                  </Link>
                  <S.ModalFormGroup>
                    <S.ModalFormGroupAP>Уже есть аккаунт?</S.ModalFormGroupAP>
                    <Link to={routesPath.LOGIN}>
                      <S.ModalFormGroupA>Войдите здесь</S.ModalFormGroupA>
                    </Link>
                  </S.ModalFormGroup>
                </S.ModalFormLogin>
              </S.ModalBlock>
            </S.Modal>
        </S.Wrapper>
    </>
  );
};
