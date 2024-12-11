import styles from '@/app/styles.module.css'
import { EmailSubmitForm } from '@/components/EmailSubmitForm'
import { GradientText } from '@/components/GradientText/GradientText'
import { Container, Text, Title } from '@mantine/core'
import Link from 'next/link'
import React, { FC, PropsWithChildren as PWC } from 'react'

const F: FC<PWC> = ({ children }) => <Link href='forgot-password'>{children}</Link>

export const Welcome = () => {
  return (
    <Container size='500px'>
      <Title className={styles.fatTitle} ta='center' pt={50}>
        Welcome to <GradientText>ModBot</GradientText>
      </Title>

      <Text ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        Login or Register
      </Text>
      <Container>
        <EmailSubmitForm />
      </Container>

      <Text c='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        <F>Forgot Password</F>
      </Text>
    </Container>
  )
}
