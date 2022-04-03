// Kiểu dữ liệu mà có nhận tham số và trả về kiểu dữ liệu tương ứng

interface Member {
  name: string
  age: string
}

interface ResponseData<T> {
  data: Array<T>
  total: number
}

function testFunction<T>(data: Array<T>, total: number): ResponseData<T> {
  const result: ResponseData<T> = {
    data,
    total,
  }

  return result
}
