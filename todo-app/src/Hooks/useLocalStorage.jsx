import { useEffect, useCallback, useState } from "react";

const useLocalStorage = (key, initialValue = "") => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  /* Using useEffect 
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageValue));
   }, [localStorageValue, key]);

   // return setLocalStorageValue instead of setItem when using this method
*/
  /* using useCallback

  const setItem = useCallback(
    (value) => {
      localStorage.setItem(key, JSON.stringify(value));
      setLocalStorageValue(value);
    },
    [key]
  ); */

  const setItem = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocalStorageValue(value);
  };

  const removeItem = () => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  };

  return [localStorageValue, setItem, removeItem];
};

export default useLocalStorage;
