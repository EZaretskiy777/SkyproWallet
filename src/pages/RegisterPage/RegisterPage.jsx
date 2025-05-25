import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import * as S from "./RegisterPage.styled.js";
import { routesPath } from "../../lib/routesPath.js";
import React, { useEffect, useState } from "react";
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

   const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const { setIsAuth } = useAuth();

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

    useEffect( () => {
      setErrors({name: false, login: false, password: false})
      setErrorMessage('')
    }, [inputValue.name, inputValue.login, inputValue.password]);

  const registerHandler = async() => {

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
    let isValid = true;

    if (!inputValue.name.trim()) {
      setErrors((prev) => ({...prev, name: true}))
      isValid = false;
    }

    if (!inputValue.login.trim()) {
      setErrors((prev) => ({...prev, login: true}))
      isValid = false;
    }

    if (!inputValue.password.trim()) {
      setErrors((prev) => ({...prev, password: true}))
      isValid = false;
    }

    return isValid;
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm()
    if (!isFormValid) {
      setErrorMessage("Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку");
      console.log("форма не валидна")
      return;
    } registerHandler()
  };

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
                 $error={errors.name}
                  type="text"
                  name="name"
                  placeholder="Имя"
                />
                <S.ModalInput
                 onChange={onChangeInput} value={inputValue.login}
                 $error={errors.login}
                  type="text"
                  name="login"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                 onChange={onChangeInput} value={inputValue.password}
                 $error={errors.password}
                  type="password"
                  name="password"
                  placeholder="Пароль"
                />
                {errorMessage && <S.ErrorP>{errorMessage}</S.ErrorP>}
                  <S.ModalBtnRegisterEnter disabled={!!errorMessage} type="submit">
                     Зарегистрироваться
                  </S.ModalBtnRegisterEnter>
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
