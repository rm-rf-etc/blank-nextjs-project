'use client'
import React from 'react'
import { AppContext } from '@/components/ClientAppContext/ClientAppContext'
import { Notification, rem, Affix } from '@mantine/core'
import { IconX, IconCheck } from '@tabler/icons-react'

const errorIcon = <IconX style={{ width: rem(20), height: rem(20) }} />
const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />

const N = ({ errors, notices, delError, delNotice }: AppContext) => {
  return (
    <>
      <Affix top='md' right='md' >
        {errors.length > 0 && errors.map((error, i) => {
          return (
            <Notification
              key={i}
              icon={errorIcon}
              title={error.title}
              onClose={() => delError(i)}
              m="sm"
            >
              {error.message}
            </Notification>
          )
        })}
      </Affix>
      <Affix bottom='md' right='md' >
        {notices.length > 0 && notices.map((notice, i) => {
          return (
            <Notification
              key={i}
              icon={checkIcon}
              title={notice.title}
              onClose={() => delNotice(i)}
              m="sm"
            >
              {notice.message}
            </Notification>
          )
        })}
      </Affix>
    </>
  )
}

export const Notifications = () => {
  const ctx = React.useContext(AppContext)
  return <N {...ctx} />
}
