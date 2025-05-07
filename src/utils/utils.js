export const getUserToken = () => {
  return JSON.parse(localStorage.getItem("userInfo")).user.token;
};
