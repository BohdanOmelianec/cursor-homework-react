import Home from './Home';
import Tweets from './hw17/hw17';
import Contracts from './hw18/hw18';
import Photos from './Photo';

const routes = [
    {
        path: '/cursor-homework-react',
        component: <Home />,
        exact: true,
    },
    {
        path: '/tweets',
        component: <Tweets />,
        exact: true,
    },
    {
        path: '/contracts',
        component: <Contracts />,
        exact: true,
    },
    {
        path: '/photo',
        component: <Photos />,
        exact: true,
    },
];

export default routes;