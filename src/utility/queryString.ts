export const getValueFromLocationSearch = (search: string, key: string) => {
  return new URLSearchParams(search).get(key);
};
