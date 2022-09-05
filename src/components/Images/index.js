import classNames from 'classnames/bind'
import { useState } from 'react'
import { forwardRef } from 'react'

import styles from './Img.module.scss'
import { img } from '~/asserts/img'
const cx = classNames.bind(styles)

function Img(
  { alt, src, fallBack: customFallback = img.noImg, classNames, ...props },
  ref,
) {
  const [fallBack, setFallback] = useState('')

  return (
    <img
      ref={ref}
      classNames={classNames}
      src={src || customFallback }
      alt={alt}
      onError={() => {
        setFallback(customFallback)
      }}
      {...props}
    />
  )
}

export default forwardRef(Img)
