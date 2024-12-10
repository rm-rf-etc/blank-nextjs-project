'use client'
import styles from '@/app/styles.module.css'
import { GradientText } from '@/components/GradientText/GradientText'
import { Container, Text, Title } from '@mantine/core'
import React from 'react'

export default () => {
  return (
    <Container>
      <Title className={styles.fatTitle} ta='center' pt={50}>
        Welcome to <GradientText>Mantine</GradientText>
      </Title>

      <Text c='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        This is Next.js
      </Text>
    </Container>
  )
}
