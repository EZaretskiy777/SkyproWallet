import axios from "axios";

const API_URL_TRANSACTIONS = "https://wedev-api.sky.pro/api/transactions";

export async function getTransactions({ token }) {
  try {
    const data = await axios.get(API_URL_TRANSACTIONS, {
      headers: {
        authorization: `Bearer ${token}`.replaceAll('"', ""),
      },
    });

    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function addTransactions({ token, transaction }) {
  try {
    const data = await axios.post(API_URL_TRANSACTIONS, transaction, {
      headers: {
        authorization: `Bearer ${token}`.replaceAll('"', ""),
        "Content-Type": "",
      },
    });

    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function deleteTransactions({ token, id }) {
  try {
    const data = await axios.post(API_URL_TRANSACTIONS + "/" + id, {
      headers: {
        authorization: `Bearer ${token}`.replaceAll('"', ""),
        "Content-Type": "",
      },
    });

    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
