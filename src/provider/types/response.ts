export interface Response<T> {
  data: T;
  meta: Meta;
}

interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
