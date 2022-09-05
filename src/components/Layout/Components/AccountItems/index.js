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
        src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IEcsxSSUv_0AX8DhOwE&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT8mcAXS8vbxKqke7ApIn9jU3doHriOf7U9sEY-szjhVlA&oe=6318BDAA"
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
