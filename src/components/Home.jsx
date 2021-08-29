import React from 'react';
import logo from './logo.png'
import reactLogo from './react.png'
import styled from 'styled-components';

const Img = styled.img`
    width: 50%;
`;

export default function Home() {
    return (
        <div id="logo_box">
            <Img id='cursor_logo' src={logo} alt="logo"></Img>
            <Img id='react_logo' src={reactLogo} alt="logo"></Img>
            <p id='logo_box_title'>Welcome to my React Homeworks</p>
        </div>
    )
}