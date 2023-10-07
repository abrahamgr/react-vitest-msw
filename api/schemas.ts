import { Type } from '@sinclair/typebox'

export const LoginSchema = {
  username: Type.String(),
  password: Type.String(),
}
