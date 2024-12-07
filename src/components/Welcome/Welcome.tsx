'use client'
import React from 'react'
import { Text, Title, Container } from '@mantine/core'
import { GradientText } from '@/components/GradientText/GradientText'
import styles from '@/app/styles.module.css'

export default () => {
  return (
    <Container>
      <Title className={styles.fatTitle} ta="center" pt={50}>
        Welcome to <GradientText>Mantine</GradientText>
      </Title>

      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This is Next.js
      </Text>
    </Container>
  )
}
