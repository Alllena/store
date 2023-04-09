import queryString from "query-string";
// Функция для извлечения параметров из строки запросов
export const getQueryParams = (location: any) => {
  return queryString.parse(location.search);
};
