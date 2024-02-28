import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

export const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // api call for all products

  const fetchProducts = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    setProducts(data);
    console.log(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        products,
        setProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const GlobalContext = () => {
  return useContext(AppContext);
};
