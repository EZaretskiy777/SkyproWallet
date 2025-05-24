export const getUserToken = () => {
  return JSON.parse(localStorage.getItem("userInfo")).user.token;
};

export const dateFormat = (inputDate) => {
  if (!inputDate) return "";

  if (inputDate instanceof Date) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  } else {
    const [day, month, year] = inputDate.split(".");
    return `${month}-${day}-${year}`;
  }
};

export const isAuth = () => (localStorage.getItem("userInfo") ? true : false);
