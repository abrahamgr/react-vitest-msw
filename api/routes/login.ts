import {
  RouteHandler,
  FastifyPluginCallback
} from 'fastify'
import { paths } from '../paths.js'
import { LoginBody } from '../schemas.js'
import { User } from '../data/typings.js'
import { findUserLogin, findUserRegister, signupUser } from '../data/login.js'

const loginHandler: RouteHandler = async (req, reply) => {
  const user = req.body as User
  const result = await findUserLogin(user)
  if(!result.success) {
    return result
  }
  
  const { username } = user
  const token = req.server.jwt.sign({ username }, { expiresIn: '1d' })
  reply.status(200)
  return {
    success: true,
    token,
  }
}

const signupHandler: RouteHandler = async (req, reply) => {
  const user = req.body as User
  const result = await findUserRegister(user)
  
  if(!result.success) {
    return result
  }

  await signupUser(user)
  reply.status(200)
  return {
    success: true,
    message: 'user registered',
  }
}

export const login: FastifyPluginCallback = (app, _, done) => {
  app.post(paths.login, {
    schema: {
      body: LoginBody,
    },
  }, loginHandler)

  app.post(paths.signup, {
    schema: {
      body: LoginBody,
    },
  }, signupHandler)

  done()
}
