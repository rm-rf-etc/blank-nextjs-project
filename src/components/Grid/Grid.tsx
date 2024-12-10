import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  r?: string
  c?: string
  w?: string
  h?: string
}
export const Grid = ({
  children,
  c = '1fr 2fr',
  r,
  w = '100%',
  h = '100%',
}: Props) => {
  const style: Record<string, string> = {
    height: h,
    width: w,
    display: 'grid',
  }
  if (c) {
    style.gridTemplateColumns = c
  }
  if (r) {
    style.gridTemplateRows = r
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}
