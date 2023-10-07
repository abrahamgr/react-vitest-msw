import Fastify, { type RegisterOptions } from 'fastify'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { login } from './routes/login.ts'
import { db } from './data/index.ts'


const fastify = Fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>()

fastify.register(cors, {
  origin: (origin, cb) => {
    const hostname = new URL(origin as string).hostname
    if(hostname === 'localhost'){
    //  Request from localhost will pass
      cb(null, true)
      return
    }
    // Generate an error on other origins, disabling access
    cb(new Error('Not allowed'), false)
  },
})
fastify.register(jwt, {
  secret: 'my-secret',
})

// Declare a route
fastify.get('/', async function handler () {
  return db.data.users
})

const registerOptions: RegisterOptions = {
  prefix: '/api',
}

fastify.register(login, registerOptions)

// Run the server!
try {
  await fastify.listen({
    port: 8080,
  })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
