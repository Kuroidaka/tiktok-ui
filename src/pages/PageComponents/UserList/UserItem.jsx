import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Avatar from '~/components/Avatar'
import Button from '~/components/Button'
import styles from './UserList.module.scss'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import Video from '~/pages/PageComponents/Video'

const cx = classNames.bind(styles)

function UserItem() {
  return (
    <div className={cx('User-wrapper')}>
      <Avatar
        className={cx('avatar')}
        src={
          'https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/298952787_583364729915305_2014630104880299723_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=a7TSpX6mhTcAX8xgOM2&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9jBbbTBvoiL3HSGD7k8TPH90go448WCqeVTDdl_gkg0g&oe=63245C19'
        }
      />

      <div className={cx('user-contents')}>
        <div className={cx('user-info')}>
          <h3 className={cx('user-title')}>trungle123</h3>
          <h4 className={cx('user-name')}>Le Quang Trung</h4>
        </div>
        <Button outline small className={cx('follow-btn')}>
          Follow
        </Button>
        <div className={cx('user-description')}>
          Người con gái chẳng còn kêu caaaaa🤣🤣🤣
        </div>

        <div className={cx('video-music')}>
          <a href={'/'} className={cx('song-btn')}>
            <FontAwesomeIcon
              icon={faMusic}
              className={cx('icon')}
            ></FontAwesomeIcon>
            <div className={cx('song-name')}>
              Ellie Goulding - Love Me Like You Do
            </div>
          </a>
        </div>

        {/* Video */}
       <Video />

      </div>

    </div>
  )
}

export default UserItem
