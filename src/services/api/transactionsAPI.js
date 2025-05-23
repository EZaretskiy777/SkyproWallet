import axios from "axios";


const TransactionsAPI = {
  API_URL_TRANSACTIONS: "https://wedev-api.sky.pro/api/transactions",
  NEXTJS_API_URL: "http://localhost:3000/api/proxy/transactions",

  async readAll({ token, sorting, filters }) {
    let uri = this.API_URL_TRANSACTIONS

    if (sorting || filters && filters.length) {
      const parts = []

      if (sorting)
        parts.push(`sortBy=${sorting}`)

      if (filters && filters.length)
        parts.push(`filterBy=${filters.join(",")}`)

      uri = `${uri}?${parts.join("&")}`
    }

    try {
      const data = await axios.get(uri, {
        headers: {
          authorization: `Bearer ${token}`.replaceAll('"', ""),
        },
      });

      return data.data;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  },

  async readAllWithSorting({ token }) {
    const data = this.readAll({ token })

    return data.sort()
  },

  async readAllByPeriod({ token, start, end }) {
    try {
      const response = await axios.get(`${this.NEXTJS_API_URL}/period`, {
        headers: {
          authorization: `Bearer ${token}`.replaceAll('"', ""),
          "Content-Type": "",
        },
        params: { token, start, end },
      });

      return response.data;
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      throw error;
    }
  },

  async createOne({ token, transaction }) {
    try {
      const data = await axios.post(this.API_URL_TRANSACTIONS, transaction, {
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
  },

  async deleteOne({ token, id }) {
    try {
      const data = await axios.post(this.API_URL_TRANSACTIONS + "/" + id, {
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
  },
}



export default TransactionsAPI;
