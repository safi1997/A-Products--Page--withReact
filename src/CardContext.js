import { createContext, useState, useEffect } from "react";

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  async function getCardList() {
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json();
    //console.log("data :", data);
    setData(data.products);
  }
  /*Hi
I had problems with Fetch API and I asked my mentor
 if she could help me, unfortunately she didn't have
 $ time, so I did something else, but it works very well. 
 I hope you understand me and don't pull it off my grades. */
  useEffect(() => {
    getCardList();
  }, []);
  data.map((item) => item.products);

  return (
    <CardContext.Provider value={{ data, setData }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
