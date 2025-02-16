//TODO: Included types

//: Author {{{
export interface Author {
  id: string
  firstName: string
  lastName?: string
  books?: string[] // TODO: Change to Book[]
}
export type NewAuthor = Omit<Author, 'id'>
//: }}}

//: Book {{{
export interface Book {
  id: string
  title: string
  author?: string // TODO: Change to Author
}
export type NewBook = Omit<Book, 'id'>
//: }}}

//: User {{{
export interface User {
  id: string
  email: string
  password: string // <- password hash
  name: string
  imageLink: string
  books?: string[] // TODO: Change to Book[]
}
export type NewUser = Pick<User, 'email' | 'password' | 'name'>
export type AuthUser = Omit<NewUser, 'name'>
export type PublicUser = Omit<User, 'id' | 'password'>

export interface UserSignupResponse {
  accessToken: string
  user: {
    // TODO: Change to PublicUser
    email: string
    name: string
    id: Number
  }
}
//: }}}

//: Service {{{
export interface Service<NewT> {
  getAll: () => Promise<void>
  create: (obj: NewT) => Promise<void>
}
//: }}}
