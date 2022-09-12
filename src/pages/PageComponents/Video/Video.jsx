import classNames from 'classnames/bind'
import styles from './Video.module.scss'
// import video1 from './Users/phamdoancanh/Documents/workspace/WEB/react pratice/React/tiktok-ui/src/asserts/Video/Storages/video1.mp4'

const cx = classNames.bind(styles)

function Video() {
  return (
    <div className={cx('media')}>
      {/* <video
        src={'./src/asserts/Video/Storages/video1.mp4'}
       type={'video/mp4'}
   
        controls
      ></video> */}
      {/* {console.log(video1)} */}
    </div>
  )
}

export default Video
