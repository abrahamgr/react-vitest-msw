import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import * as jsonDB from '../db.json' assert { type: 'json' }
import type { AppDB } from './typings'

const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, '../db.json')
const adapter = new JSONFile<AppDB>(file)
const db = new Low(adapter, jsonDB)

await db.read()

export { db }
