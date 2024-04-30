import React, { useState, useEffect, ReactNode } from "react";
import axios from "axios";
import Context from "./Context";

interface IProviderProps {
  children: ReactNode;
}

const Provider: React.FC<IProviderProps> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [apiError, setApiError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log("response", response);
      setData(response.data.slice(0, 10));
    } catch (error) {
      setApiError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Context.Provider value={{ data, setData, apiError, isLoading }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
