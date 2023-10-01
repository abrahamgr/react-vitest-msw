import { Text } from '@radix-ui/themes'
import { Input, Button, Link, Form } from '../components'

export function Login(){
  return (
    <Form title='Login'>
      <Input placeholder='Username' />
      <Input placeholder='Password' />
      <Button type='submit'>Login</Button>
      <Text size='2' trim='end'>If you dont have an account please <Link to='/register'>register</Link></Text>
    </Form>
  )
}
