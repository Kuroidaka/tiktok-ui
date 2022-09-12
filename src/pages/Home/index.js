import classNames from "classnames/bind";

import styles from './Home.module.scss'
import UserList from '~/pages/PageComponents'

const cx=classNames.bind(styles)

function Home() {
    return (  
        <div className={cx('container')}>
            <UserList>
            </UserList>

        </div>
    );
}

export default Home;