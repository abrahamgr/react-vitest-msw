import { Flex, Separator } from '@radix-ui/themes'
import { Link } from '../Link'
import { paths } from '../../const/paths'

export const Header = () => {
  return (
    <Flex asChild direction='column'>
      <header>
        <Flex align="center" gap="3" p='3'>
          <Link to={paths.root}>Home</Link>
          <Separator orientation="vertical" />
          <Link to={paths.login}>Login</Link>
          <Separator orientation="vertical" />
          <Link to={paths.register}>Register</Link>
          <Separator orientation="vertical" />
        </Flex>
        <Flex>
          <Separator size='4'/>
        </Flex>
      </header>
    </Flex>
  )
}
