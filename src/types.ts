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
  books?: string[] // TODO: Change to Book[]
}
export type NewUser = Omit<User, 'id'>
export type PublicUser = Omit<User, 'id' | 'password'>
//: }}}
