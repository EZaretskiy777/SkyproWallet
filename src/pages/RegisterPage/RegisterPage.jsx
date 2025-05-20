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

   const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const { setIsAuth } = useAuth();

  const onChangeInput = (e) => {
    const { value, name } = e.target; //;

    setInputValue({ ...inputValue, [name]: value });
  };

  const registerHandler = async() => {

    //const { name, login, password } = inputValue; //пустые поля
    //if (!name || !login || !password) {
     // return setErrorMessage(
      //  "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку"
      //);}

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
      document.getElementById("btncolor").style.background = "gray";
      newErrors.name = true;
      isValid = false;
    }

    if (!inputValue.login.trim()) {
      document.getElementById("btncolor").style.background = "gray";
      newErrors.login = true;
      isValid = false;
    }

    if (!inputValue.password.trim()) {
      document.getElementById("btncolor").style.background = "gray";
      newErrors.password = true;
      isValid = false;
    }
    
    if(!isValid) {
      setErrorMessage("Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку");
    }

    setErrors(newErrors);
    return isValid;
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm()
    if (!isFormValid) {
      //console.log("форма не валидна")
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
                  //id="first-name"
                  placeholder="Имя"
                />
                <S.ModalInput
                 onChange={onChangeInput} value={inputValue.login}
                 $error={errors.login}
                  type="text"
                  name="login"
                  //id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                 onChange={onChangeInput} value={inputValue.password}
                 $error={errors.password}
                  type="password"
                  name="password"
                  //id="passwordFirst"
                  placeholder="Пароль"
                />
                {errorMessage && <S.ErrorP>{errorMessage}</S.ErrorP>}
                
                  <S.ModalBtnRegisterEnter id="btncolor" type="submit">
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
