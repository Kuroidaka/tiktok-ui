import PropTypes from 'prop-types';
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'


const cx = classNames.bind(styles)

function Button({
  to,
  href,
  df = false,
  leftIcon = false,
  rightIcon = false,
  primary = false,
  outline = false,
  small = false,
  large = false,
  round = false,
  text = false,
  disable = false,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = 'button'

  const props = {
    onClick,
    ...passProps,
  }

  if(disable) {
    Object.keys(props).forEach((key) => {
        if(key.startsWith('on') && typeof(props[key]) === 'function')
            delete props[key] 
    })
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const classNames = cx('wrapper', {
    [className] : className,
    primary,
    outline,
    df,
    small,
    large,
    round,
    text,
    disable
  })

  return (
    <Comp className={classNames} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}

Button.prototype = {
  to: PropTypes.string,
  href: PropTypes.string,
  df: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  round: PropTypes.bool,
  text: PropTypes.bool,
  disable: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,


}

export default Button
