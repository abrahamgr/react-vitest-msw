import Fastify, { type RegisterOptions } from 'fastify'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { login } from './routes/login'
import { db } from './data/index'

const port: number = process.env.PORT ? Number(process.env.PORT) : 8080

const isProduction = process.env.NODE_ENV === 'production'

const fastify = Fastify({
  logger: {
    level: 'error',
  },
}).withTypeProvider<TypeBoxTypeProvider>()

fastify.register(cors, {
  origin: (origin, cb) => {
    // no origin allowed for testing only
    if(!isProduction && !origin) {
      cb(null, true)
      return
    }

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
  // return {
  //   status: 'ok',
  // }
  return db.data.users
})

const registerOptions: RegisterOptions = {
  prefix: '/api',
}

fastify.register(login, registerOptions)

// Run the server!
async function run(){
  try {
    const address = await fastify.listen({
      port,
    })
    console.log('Server started on port %o', address)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

run()
