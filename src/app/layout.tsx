import '@mantine/core/styles.css'

import React from 'react'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { theme } from '@/theme'

function RootLayout({ children }: { children: any }) {
  return (
    <html style={{ height: "100%" }} lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{ height: "100%" }}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}

export default RootLayout
