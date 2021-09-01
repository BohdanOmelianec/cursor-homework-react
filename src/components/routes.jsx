import AddUser from './AddUser';
import UserTweets from './UserTweets';
import Home from './Home';
import Tweets from './hw17/hw17';
import Contracts from './hw18/hw18';
import Photos from './Photo';
import SignUp from './registration-forms/SignUp';
import AddTweet from './AddTweet';

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
        path: '/user-tweets',
        component: <UserTweets />,
        exact: true,
    },
    {
        path: '/add-user',
        component: <AddUser />,
        exact: true,
    },
    {
        path: '/add-tweet',
        component: <AddTweet />,
        exact: true,
    },
    {
        path: '/sign-up',
        component: <SignUp />,
        exact: true,
    },
];

export default routes;