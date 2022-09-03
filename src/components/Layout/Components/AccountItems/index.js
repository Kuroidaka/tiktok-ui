import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'

import styles from './AccountItems.module.scss'

const cx = classNames.bind(styles)

function Accounts() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mI_s95bsQHoAX_Lwu-V&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT8HKBfRvUnrG8KPsixS4tSTDvmsCGaXmb4i_dJIo3w3Gw&oe=6314C92A"
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
