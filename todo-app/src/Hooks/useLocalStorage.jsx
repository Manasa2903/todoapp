import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue = "") => {
  const [localStorgeValue, setLocalStorageValue] = useState(() => {
    try {
      return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorgeValue));
  }, [localStorgeValue, key]);

  const removeItemFunc = () => {
    localStorage.removeItem(key);
  };

  return [localStorgeValue, setLocalStorageValue, removeItemFunc];
};

export default useLocalStorage;
