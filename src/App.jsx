import React from 'react';
import './style.css';
import Tweets from './components/hw17/hw17';
import Contracts from './components/hw18/hw18';
import Home from './components/Home';
import Photos from './components/Photo';
import { Route, NavLink, Switch } from 'react-router-dom'



function NavLinks() {
    return (
        <div className='nav_links'>
            <NavLink exact to='/' className='main_link'>Home</NavLink>
            <NavLink to='/load' className='main_link'>Homework 17</NavLink>
            <NavLink to='/contracts' className='main_link'>Homework 18</NavLink>
            <NavLink to='/photo' className='main_link'>Photos</NavLink>
        </div>
    )
}

function App() {
    return (
        <>
            <NavLinks />
            <div id="content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/load' component={Tweets}/>
                    <Route path='/contracts' component={Contracts}/>
                    <Route path='/photo' component={Photos}/>
                </Switch>
            </div> 
        </>
    )
}

export default App;
