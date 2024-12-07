import React, { FC, PropsWithChildren } from 'react'
import { Text } from '@mantine/core'

type Props = PropsWithChildren & {
  from?: string
  to?: string
}
export const GradientText: FC<Props> = ({ children, from = 'pink', to = 'yellow' }) => (
  <Text inherit variant="gradient" component="span" gradient={{ from, to }}>
    {children}
  </Text>
)
