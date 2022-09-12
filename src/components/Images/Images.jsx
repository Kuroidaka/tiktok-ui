import classNames from 'classnames/bind'
import { useState } from 'react'
import { forwardRef } from 'react'

import PropTypes from 'prop-types';
import styles from './Img.module.scss'
import { img } from '~/asserts/img'

const cx = classNames.bind(styles)

function Img(
  { alt, src, fallBack: customFallback = img.noImg, classNames, ...props },
  ref,
) {
  // const [fallBack, setFallback] = useState(customFallback)

  // const handleError = () => {
  //   setFallback(customFallback)
  // }

  const classes = cx('wrapper', { [classNames]: classNames })

  return (
    <img
      ref={ref}
      className={classes}
      src={src || customFallback }
      alt={alt}
      // onError={handleError}
      {...props}
    />
  )
}

Img.propType = {
  alt: PropTypes.string, 
  src: PropTypes.string,
  fallBack: PropTypes.string,
  classNames: PropTypes.string
}

export default forwardRef(Img)
