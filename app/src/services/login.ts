import { apiPath } from '../const/apiPath'
import { LoginResponse } from 'api/data/typings'

const headers = {
  'Content-Type': 'application/json',
}

export async function postLogin(payload: Record<string, FormDataEntryValue>): Promise<LoginResponse>{
  const response = await fetch(apiPath.login, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers,
  })
  return await response.json()
}

export async function postSignup(payload: Record<string, FormDataEntryValue>): Promise<LoginResponse>{
  const response = await fetch(apiPath.signup, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers,
  })
  return await response.json()
}
