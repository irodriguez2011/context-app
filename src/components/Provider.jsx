import React, { useState, useEffect } from "react";
import axios from "axios";
import Context from "./Context";

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
  console.log("data", data);

  return (
    <Context.Provider value={{ data, setData, apiError, isLoading }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
