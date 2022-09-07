import { useEffect, useState } from 'react'

function useDebounce( value, delay ) {
  const [deBounceValue, setDeBounceValue] = useState('')

  useEffect(() => {
    const debounce = setTimeout(() => setDeBounceValue(value), delay)

    return () => clearTimeout(debounce)
  }, [value])

  return deBounceValue
}

export default useDebounce
