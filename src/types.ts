export type Id = Number

//: Author {{{
export interface Author {
  id: Id
  lastname: string
  firstname?: string
  books?: string[] // TODO: Change to Book[]
}
export type AuthorNew = Omit<Author, 'id'>
//: }}}

//: Book {{{
export interface Book {
  id: Id
  title: string
  author?: string // TODO: Change to InfoAuthor
}
export type BookNew = Omit<Book, 'id'>
//: }}}

//: User {{{
export interface User {
  id: Id
  email: string
  password: string // <- password hash
  name: string
  books?: string[] // TODO: Change to Book[]
}
export type UserNew = Pick<User, 'email' | 'password' | 'name'>
export type UserAuth = Omit<UserNew, 'name'>
export type UserPublic = Omit<User, 'id' | 'password'>

export interface UserAuthResponse {
  accessToken: string
  user: {
    // TODO: Change to UserPublic
    email: string
    name: string
    id: Id
  }
}
//: }}}
