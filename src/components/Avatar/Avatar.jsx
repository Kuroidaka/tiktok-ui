import classNames from 'classnames/bind';
import { forwardRef } from 'react';

import styles from './Avatar.module.scss'
import Img from '~/components/Images'

const cx = classNames.bind(styles)

function Avatar({ src, fallBack, alt='name', large = false, small = false, className }) {

    const classes = {
        [className] : className,
        large,
        small,
    }

    return ( 
        <Img
        className={cx('avatar', classes)}
        alt={alt}
        src={fallBack || src}
        />
     );
}

export default Avatar;