import { db } from './index.js'
import { User, LoginResponse } from '../data/typings.js'
import { hash, compare } from 'bcrypt'

export async function findUserRegister(user: User): Promise<LoginResponse> {
  const userFound = db.data.users.find(item => item.username === user.username)
  return {
    success: !userFound,
    message: userFound ? 'user already registered' : '',
  }
}

export async function findUserLogin(user: User): Promise<LoginResponse> {
  const userFound = db.data.users.find(item => item.username === user.username)

  if(!userFound) {
    return {
      success: false,
      message: 'user not found',
    }
  }

  const passMatch = await compare(user.password, userFound.password)
  return {
    success: passMatch,
    message: passMatch ? '' : 'password or username incorrect',
  }
}

export async function signupUser(user: User): Promise<void>{
  const { username, password } = user
  return await hash(password, 10, (err, passwordHash) => {
    if(err) throw err
    db.data.users.push({ username, password: passwordHash })
    db.write()
  })
}
