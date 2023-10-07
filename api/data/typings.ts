export interface AppDB {
  users: User[]
}

export interface User {
  username: string
  password: string
}
