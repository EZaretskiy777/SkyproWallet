import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import * as S from "./RegisterPage.styled.js";
import { routesPath } from "../../lib/routesPath.js";
import React, { useState } from "react";
import { register } from "../../services/api/user.js";
import { useAuth } from "../../providers/AuthProvider";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [inputValue, setInputValue] = useState({
    name: "",
    login: "",
    password: "",
  });

  const { setIsAuth } = useAuth();

  const onChangeInput = (e) => {
    const { value, name } = e.target; //;

    setInputValue({ ...inputValue, [name]: value });
  };

  const registerHandler = (e) => {
    e.preventDefault();

    const { name, login, password } = inputValue; //пустые поля
    if (!name || !login || !password) {
      return setErrorMessage(
        "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку"
      );
    }

    register(inputValue)
      .then((response) => {
        localStorage.setItem("userInfo", JSON.stringify(response));
        setIsAuth(true);
        setErrorMessage("");
        navigate(routesPath.MAIN);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

   const validateForm = () => {
    const newErrors = { name: false, login: false, password: false };
    let isValid = true;

    if (!inputValue.name.trim()) {
      newErrors.name = true;
      setErrorMessage();
      isValid = false;
    }

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
    <Outlet/>
      <Header/>
        <S.Wrapper>
            <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Регистрация</h2>
              </S.ModalTtl>
              <S.ModalFormLogin onSubmit={handleSubmit}>
                <S.ModalInput
                 onChange={onChangeInput} value={inputValue.name}
                 $errorMessage={errorMessage.name}
                  type="text"
                  name="name"
                  //id="first-name"
                  placeholder="Имя"
                />
                <S.ModalInput
                 onChange={onChangeInput} value={inputValue.login}
                 $errorMessage={errorMessage.login}
                  type="text"
                  name="login"
                  //id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                 onChange={onChangeInput} value={inputValue.password}
                 $errorMessage={errorMessage.password}
                  type="password"
                  name="password"
                  //id="passwordFirst"
                  placeholder="Пароль"
                />
                {errorMessage && <S.ErrorP>{errorMessage}</S.ErrorP>}
                <Link to={routesPath.LOGIN}>
                  <S.ModalBtnRegisterEnter $disabled={errorMessage === "" ? false : true}>
                    <S.ModalBtnRegisterEnterA onClick={registerHandler}>
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
