import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Users() {
    const users = useSelector(state => state.reduserUser.users)

    return (
        users.map(user => {
            return(
                <div>
                    {user.title}
                </div>
            )
        })
    );

}
