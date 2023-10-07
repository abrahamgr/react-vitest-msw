import { ComponentProps, type FC } from 'react'
import { TextField } from '@radix-ui/themes'

type TextFieldInputProps = ComponentProps<typeof TextField.Input>

export const Input: FC<TextFieldInputProps>  = props => {
  const { mt, mb, ml, mr } = props
  return (
    <TextField.Root mt={mt} mb={mb} ml={ml} mr={mr}>
      <TextField.Input {...props}
        mt={undefined}
        mb={undefined}
        ml={undefined}
        mr={undefined}
      />
    </TextField.Root>
  )
}
