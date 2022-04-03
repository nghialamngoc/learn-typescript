// What: tập hợp các giá trị cùng nhóm

enum Status {
  PENDING, // 0
  IN_PROGRESS = 3, // 1
  DONE, // 2
  CANCELLED = 'cancel', // 3
}

const inProgress = Status[3]
const cancel = Status.CANCELLED
const done = Status.DONE

console.log('Status', inProgress)
console.log('Status', done)
console.log('Status', cancel)
