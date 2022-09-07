import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { routesPath } from '~/configRoutes';

// Public Routes
const publicRoutes = [
    {path: routesPath.home , component: Home },
    {path: routesPath.following , component: Following },
    {path: routesPath.profile , component: Profile },
    {path: routesPath.upload , component: Upload, layout: null },
    {path: routesPath.search , component: Search, layout: HeaderOnly}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }