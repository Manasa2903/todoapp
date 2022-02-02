const useLocalStorage = () => {
  let storageMethods = {
    getItem: (key) => {
      return JSON.parse(localStorage.getItem(key));
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
