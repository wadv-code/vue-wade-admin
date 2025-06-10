// 对象any
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
declare interface TypedAny<T = any> {
  [key: string]: T;
}
