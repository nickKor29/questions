export type BaseApiResponce<T> = {
  data: T[];
  page: number;
  limit: number;
  total: number;
};
