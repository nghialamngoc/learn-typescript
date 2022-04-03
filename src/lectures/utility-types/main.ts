// 1. Partial: Set all props of Type to optional
// 2. Required: Set all props of Type to required
// 3.Readonly: Set all props of Type to readonly
// 4. Record<Keys, Type>: A type with key from Keys and has value of Type
// 5. Pick<Type, Keys>: Constructs a type by picking the set of properties Keys
// 6. Omit<Type, Keys>: Constructs a type by picking all properties from Type then removing Keys
// 7. ReturnType: Constructs a type consisting of the return type of function Type

interface Type1 {
  title: string
  desc: string
}

const todo1: Type1 = {
  title: 'organize desk',
  desc: 'clear clutter',
}

const todo2: Partial<Type1> = {}

// Record
const cats: Record<string, string | number> = {
  name: 'miffy',
}

type CatName = 'miffy' | 'boris'

const cats2: Record<CatName, string> = {
  miffy: 'Miffy',
  boris: 'Boris',
}

// Pick

type PickExample = Pick<Type1, 'title' | 'desc'>
const pickExample: PickExample = {
  title: 'pick example',
  desc: 'desc',
}

// Omit
type OmitExample = Omit<Type1, 'title'>
const omitExample: OmitExample = {
  desc: 'desc',
}

// Return Type
type ReturnTypeExample = ReturnType<() => string>

const returnTypeExample: ReturnTypeExample = 'test'

console.log(todo2)
