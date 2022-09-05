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
 
  return (
    <img
      ref={ref}
      classNames={cx('wrapper', {classNames})}
      src={ fallBack || src}
      alt={alt}
      onError={handleError}
     
      {...props}
    />
  )
}

export default forwardRef(Img)
