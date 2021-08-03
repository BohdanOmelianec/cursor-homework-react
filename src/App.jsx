import React from 'react';
import './style.css';
import Load from './hw17/hw17';
import Contracts from './hw18/hw18';
import Home from './Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'



function Links() {
    const clickHandler = (e) => {
    const links = document.querySelectorAll('.main_link');

        links.forEach(link => {
            link.style.color = 'rgb(209, 209, 209)';
        })
        
        e.target.style.color = 'rgb(33, 219, 243)';
    }

    return (
        <div className='nav_links'>
            <Link className='main_link' to='/home' onClick={clickHandler}>Home</Link>
            <Link className='main_link' to='/load' onClick={clickHandler}>Homework 17</Link>
            <Link className='main_link' to='/contracts' onClick={clickHandler}>Homework 18</Link>
        </div>
    )
}

function App() {
    return (
        <Router>
            <React.Fragment>
                <Links />
                <div id="content">
                    <Home />

                    {/* <Route path='/' /> */}
                    <Route path='/load' component={Load}/>
                    <Route path='/contracts' component={Contracts}/>
                </div>
            </React.Fragment>
        </Router>
    )
}

export default App;