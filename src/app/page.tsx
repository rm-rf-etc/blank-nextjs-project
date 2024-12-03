'use server'
import React from 'react'
import { Group } from '@mantine/core'
import { DoubleNavbar } from '@/src/components/DoubleNavbar/DoubleNavbar'
import { Welcome } from '@/src/components/Welcome/Welcome'

export default async () => {
  return (
    <Group wrap="nowrap" style={{ height: '100%' }}>
      <DoubleNavbar />
      <Welcome />
    </Group>
  )
}
