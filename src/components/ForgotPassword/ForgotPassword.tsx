'use client'
import { actionSendForgotPasswordEmail } from '@/app/actions'
import { AppContext } from '@/components/ClientAppContext/ClientAppContext'
import { onResult } from '@/utils/monads'
import { Button, Group, Stack, TextInput } from '@mantine/core'
import { isEmail, useField } from '@mantine/form'
import { useContext } from 'react'

export const ForgotPassword = () => {
  const { addNotice, addError } = useContext(AppContext)

  const field = useField({
    validate: isEmail('Invalid email address'),
    validateOnChange: true,
    initialValue: '',
  })

  async function submitHandler() {
    if (field.error) return
    onResult(
      await actionSendForgotPasswordEmail(field.getValue()),
      (message: string) => addNotice({ title: 'Success', message }),
      (message: string) => addError({ title: 'Error', message }),
    )
  }

  return (
    <Stack pt='md'>
      <TextInput {...field.getInputProps()} placeholder='Enter your email' />
      <Group justify='flex-end'>
        <Button type='submit' variant='gradient' onClick={submitHandler}>
          Send
        </Button>
      </Group>
    </Stack>
  )
}
