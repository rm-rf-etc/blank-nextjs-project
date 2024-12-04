'use server'
import React from 'react'
import { Group } from '@mantine/core'
import { DoubleNavbar } from '@/src/components/DoubleNavbar/DoubleNavbar'
import { Welcome } from '@/src/components/Welcome/Welcome'

const MainPage = () => {
  return (
    <Group align="top" wrap="nowrap" style={{ height: '100%' }}>
      <DoubleNavbar />
      <Welcome />
    </Group>
  )
}

export default MainPage
