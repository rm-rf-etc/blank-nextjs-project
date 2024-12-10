'use client'
import React, { createContext, PropsWithChildren, useCallback, useState } from 'react'

export type Notice = {
  title: string
  message: string
}
const defaultContext = {
  addNotice: (_: Notice) => {},
  delNotice: (_: number) => {},
  addError: (_: Notice) => {},
  delError: (_: number) => {},
  notices: [] as Notice[],
  errors: [] as Notice[],
}
export type AppContext = typeof defaultContext
export const AppContext = createContext<AppContext>(defaultContext)

export const ClientAppContext = ({ children }: PropsWithChildren) => {
  const [notices, setNotices] = useState<Notice[]>([])
  const [errors, setErrors] = useState<Notice[]>([])

  const addNotice = useCallback((newNotice: Notice) => {
    setNotices(notices => [...notices, newNotice])
  }, [])

  const delNotice = useCallback((index: number) => {
    setNotices(notices => notices.filter((_, i) => i !== index))
  }, [])

  const addError = useCallback((newError: Notice) => {
    setErrors(errors => [...errors, newError])
  }, [])

  const delError = useCallback((index: number) => {
    setErrors(errors => errors.filter((_, i) => i !== index))
  }, [])

  return (
    <AppContext.Provider
      value={{
        notices,
        addNotice,
        delNotice,
        errors,
        addError,
        delError,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
