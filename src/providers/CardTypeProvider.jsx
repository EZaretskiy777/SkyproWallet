import React, { createContext, useContext, useState } from "react";
const CardTypeContext = createContext();
const useCardType = () => useContext(CardTypeContext);

const CardTypeProvider = ({ children }) => {
  const [cardType, setCardType] = useState("new");

  const changeCardType = (type) => {
    setCardType(type);
  };

  return (
    <CardTypeContext.Provider value={{ cardType, changeCardType }}>
      {children}
    </CardTypeContext.Provider>
  );
};

export { useCardType, CardTypeProvider };
