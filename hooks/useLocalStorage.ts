import { useState } from "react";

const useLocalStorage = (key: string, initialValue = "") => {
  const [state, setState] = useState(() => {
    // Initialize the state
    try {
      const value = window.localStorage.getItem(key);
      // Check if the local storage already has any values,
      // otherwise initialize it with the passed initialValue
      return value || initialValue;
    } catch (error) {
      console.log(`failed to get value of ${key}`, error);
    }
  });

  const setValue = (value) => {
    try {
      // If the passed value is a callback function,
      // then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, valueToStore);
      setState(value);
    } catch (error) {
      console.log(`failed to set value of ${value} for ${key}`, error);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
