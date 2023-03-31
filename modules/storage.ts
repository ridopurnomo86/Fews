export const getLocalStorage = (key: string, defaultValue: any = undefined) => {
  if (typeof window !== 'undefined') {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  }
  return null;
};

export const setLocalStorage = (key: string, value: object | string) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, JSON.stringify(value));
  }
  return null;
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.removeItem(key);
  }
  return null;
};
