export const getValueFromLocationSearch = (search: string, key: string) => {
  return new URLSearchParams(search).get(key);
};

export const generateQueryString = (params?: any) => {
  if (!params) return undefined;
  var esc = encodeURIComponent;
  var query = Object.keys(params)
    .map((k) => esc(k) + "=" + esc(params[k]))
    .join("&");
  return `?${query}`;
};
