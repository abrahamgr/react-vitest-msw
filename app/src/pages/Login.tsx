import { useState } from 'react'
import { Text } from '@radix-ui/themes'
import { Input, Button, Link, Form } from '../components'
import { apiPath } from '../const/apiPath'
import { getFormData } from '../helpers/getFormData'
import { postLogin } from '../services/login'

export function Login(){

  const [ errorMessage, setErrorMessage ] = useState('')

  const handleSubmit = async (data: React.FormEvent<HTMLFormElement>) => {
    data.preventDefault()
    setErrorMessage('')

    const response = await postLogin(getFormData(data.target as HTMLFormElement))
    const { success, message, token } = response
    if(success && token) {
      localStorage.setItem('token', token)
      setErrorMessage('Login successfully')
    }
    else if(message)
      setErrorMessage(message)
  }

  return (
    <Form
      title='Login'
      action={apiPath.login}
      method='POST'
      onSubmit={handleSubmit}
    >
      <Input placeholder='Username' name='username' required type='text' />
      <Input placeholder='Password' name='password' required type='password' />
      <Button type='submit'>Login</Button>
      <Text size='2' trim='end'>If you dont have an account please <Link to='/register'>register</Link></Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </Form>
  )
}
