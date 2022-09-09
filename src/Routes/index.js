import { layouts } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import config from '~/config';

// Public Routes
const publicRoutes = [
    {path: config.routesPath.home , component: Home },
    {path: config.routesPath.following , component: Following },
    {path: config.routesPath.profile , component: Profile },
    {path: config.routesPath.upload , component: Upload, layout: null },
    {path: config.routesPath.search , component: Search, layout: layouts.HeaderOnly}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }