export type Id = Number

//: Author {{{
export interface Author {
  lastname: string
  firstname: string
  books?: Book[]
  id: Id
}
export type AuthorNew = Omit<Author, 'id'>
export type AuthorInfo = Pick<Author, 'id' | 'lastname' | 'firstname'>
//: }}}

//: Note {{{
//TODO: Add Note type
export interface Note {
  content: string,
  id: Id
}
//: }}}

//: Book {{{
export interface Book {
  title: string
  author?: AuthorInfo
  id: Id
}
export type BookNew = Omit<Book, 'id'>
//: }}}

//: User {{{
export interface User {
  email: string
  password: string // <- password hash
  name: string
  id: Id
}
export type UserNew = Pick<User, 'email' | 'password' | 'name'>
export type UserAuth = Omit<UserNew, 'name'>
export type UserPublic = Omit<User, 'password'>

export interface UserAuthResponse {
  accessToken: string
  user: UserPublic
}
//: }}}
