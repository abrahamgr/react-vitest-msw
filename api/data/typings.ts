export interface AppDB {
  users: User[]
}

export interface User {
  username: string
  password: string
}

export interface LoginResponse {
  success: boolean
  message?: string
  token?: string
}
