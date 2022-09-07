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

  const handleError = () => {
    setFallback(customFallback)
  }
  
  const classes = cx('wrapper', {[classNames] : classNames,})

  return (
    <img
      ref={ref}
      className={classes}
      src={ fallBack || src}
      alt={alt}
      onError={handleError}
     
      {...props}
    />
  )
}

export default forwardRef(Img)
