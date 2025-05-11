import React, { createContext, useContext, useState } from "react";

const TransactionsContext = createContext();

const useTransactions = () => useContext(TransactionsContext);

const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export { useTransactions, TransactionsProvider };
