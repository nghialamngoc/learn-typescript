// Type aliases create a new name for a type. ( đặt một tên cho một kiểu dữ liệu bất kì )
type Student = {
  readonly id: number | string // union type
  name: string
  age?: number
}

interface Student2 {
  readonly id: number | string // union type '|'
  name: string
  age?: number
}

interface Contract {
  email: string
  phone: string
}

// Intersection type
// Lưu ý: kết hợp nhiều interface thì các key trùng nhau phải cùng kiểu dữ liệu

type Employee = Student2 & Contract // Intersection type '&'
interface Employee1 extends Student2, Contract {}

const employee1: Employee = {
  id: 1,
  name: 'Nghia',
  email: 'nghialamngocit@gmail.com',
  phone: '0367765209',
}

// inteface có thể khai báo nhiều lần và nó sẽ merge lại với nhau
interface Employee1 {
  desc: string
}

const exployee2: Employee1 = {
  id: 1,
  name: 'Nghia',
  email: 'nghialamngocit@gmail.com',
  phone: '0367765209',
  desc: 'desc',
}
