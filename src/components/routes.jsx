import AddUser from './AddUser';
import Users from './Users';
import Home from './Home';
import Tweets from './hw17/hw17';
import Contracts from './hw18/hw18';
import Photos from './Photo';
import SignUp from './registration-forms/SignUp';

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
    {
        path: '/users',
        component: <Users />,
        exact: true,
    },
    {
        path: '/add-user',
        component: <AddUser />,
        exact: true,
    },
    {
        path: '/sign-up',
        component: <SignUp />,
        exact: true,
    },
];

export default routes;