import React from 'react'
import { Notification } from '@mantine/core'
import { rem, Affix, Button, TextInput, Group, Stack } from '@mantine/core'
import { IconX, IconCheck } from '@tabler/icons-react'
import { useField, isEmail } from '@mantine/form'
import { isOkay, unwrapR } from '@/src/utils/monads'
import { callForgotPassword } from '@/src/app/logic/auth/forgotPassword'

const errorIcon = <IconX style={{ width: rem(20), height: rem(20) }} />
const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />

export const ForgottenPassword = () => {
  const [serverErr, setServerErr] = React.useState<string>('')
  const [serverMsg, setServerMsg] = React.useState<string>('')

  const field = useField({
    initialValue: '',
    validateOnChange: true,
    validate: isEmail('Invalid email address'),
  })

  async function submitHandler() {
    if (field.error) return
    const res = await callForgotPassword(field.getValue())
    const val = unwrapR(res)
    isOkay(res) ? setServerMsg(val) : setServerErr(val)
  }

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        {serverErr && (
          <Notification icon={errorIcon} title="Error" onClose={() => setServerErr('')}>
            {serverErr}
          </Notification>
        )}
        {serverMsg && (
          <Notification icon={checkIcon} title="Success" onClose={() => setServerMsg('')}>
            {serverMsg}
          </Notification>
        )}
      </Affix>

      <Stack pt="md">
        <TextInput
          {...field.getInputProps()}
          placeholder="Enter your email"
        />
        <Group justify="flex-end">
          <Button type="submit" variant="gradient" onClick={submitHandler}>
            Send
          </Button>
        </Group>
      </Stack>
    </>
  )
}
