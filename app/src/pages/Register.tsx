import { useState } from 'react'
import { Text } from '@radix-ui/themes'
import { Input, Button, Link, Form } from '../components'
import { apiPath } from '../const/apiPath'
import { getFormData } from '../helpers/getFormData'
import { postSignup } from '../services/login'

export function Register(){

  const [ errorMessage, setErrorMessage ] = useState('')

  const handleSubmit = async (data: React.FormEvent<HTMLFormElement>) => {
    data.preventDefault()
    setErrorMessage('')

    const response = await postSignup(getFormData(data.target as HTMLFormElement))
    const { success, message } = response
    if(success)
      setErrorMessage('Registration successfully')
    else if(message)
      setErrorMessage(message)
  }

  return (
    <Form
      title='Register'
      action={apiPath.signup}
      method='POST'
      onSubmit={handleSubmit}
    >
      <Input placeholder='Username' name='username' required type='text' />
      <Input placeholder='Password' name='password' required type='password' />
      <Button type='submit'>Login</Button>
      <Text size='2' trim='end'>If you already have an account please <Link to='/login'>login</Link></Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </Form>
  )
}
