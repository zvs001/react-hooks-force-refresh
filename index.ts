import { useCallback, useState } from 'react'

export function useForceUpdate(): [symbol, () => void] {
  const [value, setValue] = useState(Symbol('force-update/initial'))

  const forceUpdate = useCallback(() => {
    setValue(Symbol('force-update/refreshed'))
  }, [])

  return [value, forceUpdate]
}

export default useForceUpdate
