import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const Wrapper = styled.div`
    width: 430px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #121212;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`;

const LogoBox = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f48fb2;
    margin-top: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = styled.p`
    font-size: 18px;
    margin: 10px;
    letter-spacing: 1px;
`;

const Img = styled.img`
    width: 50%;
    height: 50%;
`;

const SignInForm = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
`;

const Input = styled.input`
    padding: 15px;
    margin: 10px;
    width: 100%;
    background: initial;
    border: 1px solid #424242;
    border-radius: 3px;
    outline: none;
    color: #929292;
    transition: all .4s linear;
`;

const CheckboxLabel = styled.label`
    width: 100%;
    align-self: flex-start;
    margin: 0 0 15px;
    font-size: 11px;
    color: #aaaaaa;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Checkbox = styled.input`
    border: 1px solid red;
`;

const Incorect = styled.p`
    color: red;
    font-size: 9px;
    visibility: hidden;
`;

const SubmitInput = styled.input`
    padding: 10px;
    margin: 10px;
    width: 100%;
    background-color: ${props => props.disabled ? 'grey' : '#90caf9'};
    border: none;
    outline: none;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    color: #121212;
    cursor: pointer;
`;

const Questions = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #97bfdf;
    font-size: 10px;
    letter-spacing: 0.7px;
    cursor: pointer;
`;

const Footer = styled.footer`
    padding: 50px;
    color: #8d8d8d;
    font-size: 10px;
`;

export default function SignIn(props) {
    const user = JSON.parse(localStorage.user) || null;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisable] = useState(true);
    const [isCheck, setCheck] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const emailCheck = new RegExp(/^\S{3,}@\S{2,}\.\D{2,}/);
    const passCheck = new RegExp(/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}/);
   
    useEffect(() => {
        setEmail(JSON.parse(localStorage.remember) ? user.email : '');
        setPassword(JSON.parse(localStorage.remember) ? user.pass : '');
        setCheck(JSON.parse(localStorage.remember) ? JSON.parse(localStorage.remember) : false);
    },[user.email, user.pass]);

    useEffect(() => {
        if(email && password) {
            setDisable(false);
        } else {
            setDisable(true)
        }
    }, [email, password])

    if(redirect) {
        return <Redirect to='/sign-out' />
    }

    return(
        <Wrapper>
            <LogoBox><Img src='https://image.flaticon.com/icons/png/512/565/565547.png' alt="logo"></Img></LogoBox>
            <Header>Sign in</Header>
            <SignInForm autoComplete='off'>
                <Input 
                    type='email' 
                    placeholder='Email Adress *'
                    value={email}
                    onChange={ e => {
                        const et = e.target;
                        setEmail(e.target.value);

                        if(et.value === '') {
                            et.style.borderColor = '#424242'
                        } else if(e.target.value.match(emailCheck)) {
                            e.target.style.borderColor = 'green'
                        } else {
                            e.target.style.borderColor = 'red'
                        }
                    }}>
                </Input>
                <Input 
                    type='password' 
                    placeholder='Password *'
                    value={password}
                    onChange={ e =>  {
                        const et = e.target;
                        setPassword(e.target.value)
                        if(et.value === '') {
                            et.style.borderColor = '#424242'
                        } else if(e.target.value.match(passCheck)) {
                            e.target.style.borderColor = 'green'
                        } else {
                            e.target.style.borderColor = 'red'
                        }
                    }}>
                </Input>
                <CheckboxLabel>
                    <Checkbox 
                        type='checkbox'
                        checked={isCheck}
                        onChange={() => setCheck(!isCheck)}
                    />
                    Remember me
                </CheckboxLabel>
                <Incorect>Incorect email or password</Incorect>
                <SubmitInput 
                    disabled={disabled}
                    type='submit' 
                    value='Sign In' 
                    onClick={(e) => {
                        e.preventDefault();
                        const user = JSON.parse(localStorage.user);

                        if(user.email === email && user.pass === password) {
                            setRedirect(true)
                            localStorage['remember'] = isCheck;
                            localStorage.setItem('status', true);
                            props.listener();
                        } else {
                            e.target.previousElementSibling.style.visibility = 'visible';
                        }
                    }}/>
                <Questions>
                    <span>Forgot password?</span>
                    <Link to='/sign-up' style={{textDecoration: 'none', color: '#97bfdf'}}>Don't have an account? Sign Up</Link>
                </Questions>
                <Footer>Copyright &copy; Your Website 2021.</Footer>


            </SignInForm>

        </Wrapper>
    )
}