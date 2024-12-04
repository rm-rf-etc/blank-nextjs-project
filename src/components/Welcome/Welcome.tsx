'use client'
import React, { FC, PropsWithChildren } from 'react'
import { Text, Title, Container } from '@mantine/core'
import { ForgottenPassword } from '@/src/components/ForgottenPassword/ForgottenPassword'
import { ColorSchemeToggle } from '@/src/components/ColorSchemeToggle/ColorSchemeToggle'
import classes from './Welcome.module.css'
import { trpc } from '@/src/utils/trpc'

const Gradient: FC<PropsWithChildren> = ({ children }) => (
  <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
    {children}
  </Text>
)

function WelcomeComponent() {
  return (
    <Container>
      <Container>
        <Title className={classes.title} ta="center" pt={50}>
          Welcome to <Gradient>Mantine</Gradient>
        </Title>

        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
          This is Next.js
        </Text>
      </Container>

      <Container size="xs" px="md">
        <Container pt="md">
          <ColorSchemeToggle />
        </Container>

        <Container>
          <ForgottenPassword />
        </Container>
      </Container>
    </Container>
  )
}

export const Welcome = trpc.withTRPC(WelcomeComponent)
