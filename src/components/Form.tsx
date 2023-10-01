import type { FC, PropsWithChildren } from 'react'
import { Flex, Card, Heading } from '@radix-ui/themes'

interface FormProps extends PropsWithChildren {
  title?: string
}

export const Form: FC<FormProps> = ({ children, title }) => {
  return (
    <Card asChild size='4'>
      <form>
        <Flex direction='column' gap='5'>
          {title ? <Heading as='h2' align='center'>Login</Heading> : null}
          {children}
        </Flex>
      </form>
    </Card>
  )
}
