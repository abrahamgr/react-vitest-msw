import Fastify from 'fastify'
import { db } from './data/index.ts'

const fastify = Fastify({
  logger: true,
})


// Declare a route
fastify.get('/', async function handler () {
  return db.data.users
})

// Run the server!
try {
  await fastify.listen({
    port: 8080,
  })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
