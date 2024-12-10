import { Text } from '@mantine/core'
import React, { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  from?: string
  to?: string
}
export const GradientText: FC<Props> = ({ children, from = 'pink', to = 'yellow' }) => (
  <Text inherit variant='gradient' component='span' gradient={{ from, to }}>
    {children}
  </Text>
)
