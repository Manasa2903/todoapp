const useLocalStorage = () => {
  let storageMethods = {
    getItem: (key) => {
      const localStorageItem = JSON.parse(localStorage.getItem(key));
      const storedItem = localStorageItem ? localStorageItem : [];
      return storedItem;
    },
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem: (key) => {
      localStorage.removeItem(key);
    },
  };
  return storageMethods;
};

export default useLocalStorage;
