import Header from "../../components/Header/Header.jsx";
import { routesPath } from "../../lib/routesPath.js";
import * as S from "./LoginPage.styled.js";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
//import PropTypes from "prop-types";
import { loginAuth } from "../../services/api/user.js";
import { useAuth } from "../../providers/AuthProvider";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [inputValue, setInputValue] = useState({
    login: "",
    password: "",
  });

  const { setIsAuth } = useAuth();

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const { login, password } = inputValue; //пустые поля
    if (!login || !password) {
      return setErrorMessage(
        "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку"
      );
    }
    loginAuth(inputValue)
      .then((response) => {
        localStorage.setItem("userInfo", JSON.stringify(response));
        setIsAuth(true);
        setErrorMessage("");
        // setIsAuth(true);
        navigate(routesPath.MAIN);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };



  const validateForm = () => {
    const newErrors = { login: false, password: false };
    let isValid = true;

    if (!inputValue.login.trim()) {

      newErrors.login = true;
      setErrorMessage("Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку");
      isValid = false;
    }

    if (!inputValue.password.trim()) {
      newErrors.password = true;
      setErrorMessage("Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку");
      isValid = false;
    }

    setErrorMessage(newErrors);
    return isValid;
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }}

  return (
    <>
      <Outlet />
      <Header />
      <S.Wrapper>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Вход</h2>
              </S.ModalTtl>
              <S.ModalFormLogin onSubmit={handleSubmit}>
                <S.ModalInput
                 $notLastChild={true}
                  onChange={onChangeInput}
                  value={inputValue.login}
                  $errorMessage={errorMessage.login}
                  type="text"
                  name="login"
                  //id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                 $notLastChild={true}
                  onChange={onChangeInput}
                  value={inputValue.password}
                  $errorMessage={errorMessage.password}
                  type="password"
                  name="password"
                  //id="formpassword"
                  placeholder="Пароль"
                />
               {errorMessage && <S.ErrorP>{errorMessage}</S.ErrorP>}
                <S.ModalBtnEnter $disabled={errorMessage === "" ? false : true}>
                  <S.ModalBtnEnterA onClick={loginHandler}>
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

//LoginPage.propTypes = {
//  isSignUp: PropTypes.bool.isRequired,
//};
