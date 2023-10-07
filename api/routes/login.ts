import {
  RouteHandler,
  FastifyPluginCallback
} from 'fastify'
import { paths } from '../paths.ts'
// import { LoginSchema } from '../schemas.ts'
import { db } from '../data/index.ts'
import { User } from '../data/typings.ts'

const loginHandler: RouteHandler =  (req, reply) => {
  const user = req.body as User
  const userFound = db.data.users.find(item => item.username === user.username && item.password ===  user.password)
  if(!userFound)
    reply.status(404)
  return {
    success: userFound !== undefined,
  }
}

export const login: FastifyPluginCallback = (app, _, done) => {
  app.post(paths.login, { schema: { } }, loginHandler)
  done()
}
