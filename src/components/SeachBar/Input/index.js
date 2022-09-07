import {forwardRef} from 'react'

function SearchInput({ searchValue, placeholder, onChange, onFocus, ...props}, ref) {
  return (
    <input
      ref={ref}
      value={searchValue}
      placeholder={placeholder}
      spellCheck={false}
      onChange={onChange}
      onFocus={onFocus}
      {...props}
    />
  )
}

export default forwardRef(SearchInput)
