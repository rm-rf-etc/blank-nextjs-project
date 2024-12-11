import '@mantine/core/styles.css'

import { ClientAppContext } from '@/components/ClientAppContext/ClientAppContext'
import { Navbar } from '@/components/Navbar/Navbar'
import { Notifications } from '@/components/Notifications/Notifications'
import { theme } from '@/theme'
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Center,
  ColorSchemeScript,
  Flex,
  MantineProvider,
} from '@mantine/core'
import { MantineLogo } from '@mantinex/mantine-logo'
import { PropsWithChildren } from 'react'

// <Grid h="100%" w="100%" c="auto 1fr">

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html style={{ height: '100%' }} lang='en' suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body style={{ height: '100%' }}>
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 66,
              breakpoint: 'sm',
              collapsed: { mobile: false, desktop: false },
            }}
            padding='md'
          >
            <AppShellHeader>
              <Flex h='100%' w='66px' align='center'>
                <Center inline w='100%'>
                  <MantineLogo type='mark' size={30} />
                </Center>
              </Flex>
            </AppShellHeader>
            <AppShellNavbar pt='md'>
              <Navbar />
            </AppShellNavbar>
            <AppShellMain>
              <ClientAppContext>
                <Notifications />
                {children}
              </ClientAppContext>
            </AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}

export default RootLayout
