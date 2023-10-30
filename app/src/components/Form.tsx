import type { FC, PropsWithChildren, FormHTMLAttributes  } from 'react'
import { Flex, Card, Heading } from '@radix-ui/themes'

interface FormProps extends PropsWithChildren, FormHTMLAttributes<HTMLFormElement> {
  title?: string
}

export const Form: FC<FormProps> = ({ children, title, ...rest }) => {
  return (
    <Card asChild size='4'>
      <form {...rest}>
        <Flex direction='column' gap='5'>
          {title ? <Heading as='h2' align='center'>{title}</Heading> : null}
          {children}
        </Flex>
      </form>
    </Card>
  )
}
