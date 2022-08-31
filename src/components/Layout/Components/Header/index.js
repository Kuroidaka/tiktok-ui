import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'
import { img } from '~/asserts/img'
const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={img.logo} alt="TikTok" className={cx('TikTok-logo')}/>

        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>

        <div className={cx('load')}>
          <FontAwesomeIcon icon={faSpinner} />
        </div>

          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className={cx('action')}></div>
      </div>
    </div>
  )
}

export default Header
