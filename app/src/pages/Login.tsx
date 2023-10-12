import { Text } from '@radix-ui/themes'
import { Input, Button, Link, Form } from '../components'
import { apiPath } from '../const/apiPath'

export function Login(){

  const handleSubmit = async (data: React.FormEvent<HTMLFormElement>) => {
    data.preventDefault()
    const formData = new FormData(data.target as HTMLFormElement)
    const payload: Record<string, FormDataEntryValue> = {}
    for (const pair of formData.entries()) {
      payload[pair[0]] = pair[1]
    }
    const response = await fetch(apiPath.login, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    response.ok
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
    </Form>
  )
}
