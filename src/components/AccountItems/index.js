import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'

import styles from './AccountItems.module.scss'
import Img from '~/components/Images'


const cx = classNames.bind(styles)

function Accounts({src }) {
  return (
    <div className={cx('wrapper')}>
      <Img
        className={cx('avatar')}
        src={src}
        alt="name"
      />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Tram Huynh</span>
                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>

            <p className={cx('user-name')}>ttramhuynh1602@gmail.com</p>
        </div>
    </div>
  )
}

export default Accounts
