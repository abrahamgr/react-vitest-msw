import { Link as RadixLink } from '@radix-ui/themes'
import { FC } from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

export const Link: FC<LinkProps> = props => {
  return (
    <RadixLink asChild>
      <RouterLink {...props} />
    </RadixLink>
  )
}
