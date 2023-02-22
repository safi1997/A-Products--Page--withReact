import { createContext, useState, useEffect } from "react";

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  async function getCardList() {
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json();
    console.log("data :", data.products);
    setData(data.products);
  }

  useEffect(() => {
    getCardList();
  }, []);

  return (
    <CardContext.Provider value={{ data, setData }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
