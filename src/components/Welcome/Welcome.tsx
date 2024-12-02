'use client'
import { Notification } from '@mantine/core'
import React, { FC, PropsWithChildren } from 'react'
import { IconX, IconCheck } from '@tabler/icons-react'
import { rem, Affix, Button, Text, Title, TextInput } from '@mantine/core'
import { useField, isEmail } from '@mantine/form'
import * as endpoints from '@/src/endpoints'
import classes from './Welcome.module.css'

type C = FC<PropsWithChildren>

const Body: C = ({ children }) => (
  <div style={{ padding: '0 20% 0 20%' }}>
    {children}
  </div>
)

const M: C = ({ children }) => (
  <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
    {children}
  </Text>
)

export function Welcome() {
  const [serverErr, setServerErr] = React.useState<string>('')
  const [serverMsg, setServerMsg] = React.useState<string>('')
  const field = useField({
    initialValue: '',
    validateOnChange: true,
    validate: isEmail('Invalid email address'),
  })

  const errorIcon = <IconX style={{ width: rem(20), height: rem(20) }} />
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />

  return (
    <Body>
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
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to <M>Mantine</M>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This is Next.js
      </Text>
      <TextInput
        {...field.getInputProps()}
        label="Name"
        placeholder="Enter your email"
        mb="md"
      />
      <Button onClick={async () => {
        if (field.error) return

        const resp = await fetch(endpoints.forgotPassword.path, {
          ...endpoints.forgotPassword,
          body: JSON.stringify({ email: field.getValue() }),
        })

        const msg = (await resp.json()).message
        resp.ok ? setServerMsg(msg) : setServerErr(msg)
      }}>
        Verify
      </Button>
    </Body>
  )
}
