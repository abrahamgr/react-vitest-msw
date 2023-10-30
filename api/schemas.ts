import { Type } from '@sinclair/typebox'

export const LoginBody = Type.Object({
  username: Type.String(),
  password: Type.String(),
})

