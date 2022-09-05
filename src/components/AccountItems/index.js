import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'

import styles from './AccountItems.module.scss'
import Img from '~/components/Images'
import { Link } from 'react-router-dom'


const cx = classNames.bind(styles)

function Accounts({data}) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Img
        className={cx('avatar')}
        alt="name"
        src={data.avatar}
        />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>{data.full_name}</span>
               {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />} 
                </h4>

            <p className={cx('user-name')}>{data.nickname}</p>
        </div>
    </Link>
  )
}

export default Accounts
