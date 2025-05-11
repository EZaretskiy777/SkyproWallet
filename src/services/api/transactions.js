import axios from "axios";

const API_URL_TRANSACTIONS = "https://wedev-api.sky.pro/api/transactions";
const NEXTJS_API_URL = "http://localhost:3000/api/proxy/transactions";

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

export async function getTransactionsPeriod({ token, start, end }) {
  try {
    const response = await axios.get(`${NEXTJS_API_URL}/period`, {
      params: { token, start, end },
    });

    if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
    if (!response.ok) {
      throw new Error("Что то пошло не так");
    }

    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
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
