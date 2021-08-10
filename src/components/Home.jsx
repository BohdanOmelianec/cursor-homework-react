import React from 'react';
import logo from './logo.png'
import reactLogo from './react.png'

export default function Home() {
    return (
        <div id="logo_box">
            <img id='cursor_logo' style={{width: '50%'}} src={logo} alt="logo"></img>
            <img id='react_logo' style={{width: '50%'}} src={reactLogo} alt="logo"></img>
            <p id='logo_box_title'>Welcome to my React Homeworks</p>
        </div>
    )
}