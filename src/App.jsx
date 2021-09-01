import React, { useState } from 'react';
import './style.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import routes from './components/routes';
import SignIn from './components/registration-forms/SignIn';
import SignOut from './components/registration-forms/SignOut';


function Sign(props) {
    if(props.status) {
        return <NavLink to='/sign-out' className='main_link'>Sign out</NavLink>

    } 
    return( 
        <>
            <NavLink to='/sign-in' className='main_link'>Sign in</NavLink>
            <NavLink to='/sign-up' className='main_link'>Sign up</NavLink>
        </>
    )}


function NavLinks(props) {
    return (
        <div className='nav_links'>
            <div className='main_links'>
                <NavLink exact to='/cursor-homework-react' className='main_link'>Home</NavLink>
                <NavLink to='/tweets' className='main_link'>Homework 17</NavLink>
                <NavLink to='/contracts' className='main_link'>Homework 18</NavLink>
                <NavLink to='/photo' className='main_link'>Photos</NavLink>
                <NavLink to='/user-tweets' className='main_link'>Users Tweets</NavLink>
                <NavLink to='/add-user' className='main_link'>Add user</NavLink>
                <NavLink to='/add-tweet' className='main_link'>Add tweet</NavLink>
            </div>
            <div className='form_links'>
                <Sign status={props.status}/>
            </div>
            
            
        </div>
    )
}

function App() {
    const [isOnline, setOnline] = useState(localStorage.status ? JSON.parse(localStorage.status) : false);

    const statusHendler = () => {
        setOnline(!isOnline);
    }

    return (
        <>
            <NavLinks status={isOnline}/>
            <div id="content">
                <Switch>
                    {
                        routes.map(route => (
                            <Route
                                path={route.path}
                                key={route.toString()}
                                exact={route.exact}
                            >
                                {route.component}
                            </Route>
                        ))
                    }
                    <Route exact path='/sign-in'>
                        <SignIn listener={statusHendler}/>
                    </Route>
                    <Route exact path='/sign-out'>
                        <SignOut listener={statusHendler}/>
                    </Route>
                </Switch>
            </div> 
        </>
    )
}

export default App;
