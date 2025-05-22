import Header from "../../components/Header/Header.jsx";
import { routesPath } from "../../lib/routesPath.js";
import * as S from "./LoginPage.styled.js";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { loginAuth } from "../../services/api/user.js";
import { useAuth } from "../../providers/AuthProvider";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [inputValue, setInputValue] = useState({
    login: "",
    password: "",
  });

    const [errors, setErrors] = useState({
      login: false,
      password: false,
    });

  const { setIsAuth } = useAuth();

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  useEffect( () => {
    setErrors({login: false, password: false})
    setErrorMessage('')
  }, [inputValue.login, inputValue.password]);

  const loginHandler = async() => {

    loginAuth(inputValue)
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
  } loginHandler()
};

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
                  $error={errors.login}
                  type="text"
                  name="login"
                  //id="formlogin"
                  placeholder="Эл. почта"
                />
                 <S.ModalInput
                 $notLastChild={true}
                  onChange={onChangeInput}
                  value={inputValue.password}
                  $error={errors.password}
                  type="password"
                  name="password"
                  //id="formpassword"
                  placeholder="Пароль"
                /> 
               {errorMessage && <S.ErrorP>{errorMessage}</S.ErrorP>}
                <S.ModalBtnEnter disabled={!!errorMessage} type="submit">
                    Войти
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