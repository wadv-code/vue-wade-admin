// 对象any
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
declare interface TypedAny<T = any> {
  [key: string]: T;
}

// request Response
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
declare interface HttpResponse<T = any> {
  count: number;
  data: T;
  page: number;
  pageCount: number;
  total: number;
}
