import { useEffect, useState } from 'react'

export function useServerActionQuery<T>(
  callback: () => Promise<T>,
  initial: T,
) {
  const [data, setData] = useState<T>(initial)
  useEffect(() => {
    callback().then(setData).catch(console.error)
  }, [])
  return data
}
