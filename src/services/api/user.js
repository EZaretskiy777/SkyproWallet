import axios from "axios";

const userHost = "https://wedev-api.sky.pro/api/user";
const API_URL_USER = "https://wedev-api.sky.pro/api/user";

export async function signIn(userData) {
  try {
    const data = await axios.post(API_URL_USER + "/login", userData, {
      headers: {
        "Content-Type": "",
      },
    });
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function signUp({ name, login, password }) {
  try {
    const data = await axios.post(
      API_URL_USER,
      { login, name, password },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}


//РЕГИСТРАЦИЯ
export const register = ({ name, login, password }) => {
  return fetch(userHost, {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    }
    if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
    if (!response.ok) {
      throw new Error("Что то пошло не так");
    }
    return response.json();
  });
}

//АВТОРИЗАЦИЯ
export const loginAuth = ({ login, password }) => {
  return fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
    if (!response.ok) {
      throw new Error("Что то пошло не так");
    }
    return response.json();
  });
}
