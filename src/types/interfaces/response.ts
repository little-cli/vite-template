// 定义接口返回值
export interface IResponse<T = any> {
  code: number | string
  data: T
  message: string
}
