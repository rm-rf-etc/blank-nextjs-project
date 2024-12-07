'use client'
import { useContext } from 'react'
import { AppContext } from '@/components/ClientAppContext/ClientAppContext'
import { Button, TextInput, Group, Stack } from '@mantine/core'
import { useField, isEmail } from '@mantine/form'
import { actionSendForgotPasswordEmail } from '@/app/actions'
import { onResult } from '@/utils/monads'

export const ForgotPassword = () => {
  const ctx = useContext(AppContext)
  const field = useField({
    initialValue: '',
    validateOnChange: true,
    validate: isEmail('Invalid email address'),
  })

  async function submitHandler() {
    if (field.error) return
    onResult(
      await actionSendForgotPasswordEmail(field.getValue()),
      (msg: string) => ctx.addNotice({ title: 'Success', message: msg }),
      (msg: string) => ctx.addError({ title: 'Error', message: msg })
    )
  }

  return (
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
  )
}
