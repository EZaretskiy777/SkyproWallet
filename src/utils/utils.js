export const getUserToken = () => {
  return JSON.parse(localStorage.getItem("userInfo")).user.token;
};

export const dateFormat = (inputDate) => {
  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
