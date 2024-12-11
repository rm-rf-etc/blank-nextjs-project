'use client'
import { actionAccountLookup } from '@/app/actions'
import { onResult } from '@/utils/monads'
import { Button, Group, TextInput } from '@mantine/core'
import { isEmail, useField } from '@mantine/form'

export const EmailSubmitForm = () => {
  const field = useField({
    validate: isEmail('Invalid email address'),
    validateOnChange: true,
    initialValue: '',
  })

  const submitHandler = async () => {
    if (field.error) return
    onResult(
      await actionAccountLookup(field.getValue()),
      (message: string) => console.log('success', message),
      (message: string) => console.log('error', message),
    )
  }

  return (
    <>
      <TextInput {...field.getInputProps()} placeholder='Enter your email' />
      <Group justify='flex-end'>
        <Button type='submit' variant='gradient' onClick={submitHandler}>
          Submit
        </Button>
      </Group>
    </>
  )
}
