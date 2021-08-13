import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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

const NameBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    padding: 15px;
    margin: 10px 0;
    width: 100%;
    background: initial;
    border: 1px solid #424242;
    border-radius: 3px;
    outline: none;
    color: #929292;
    transition: border-color .4s linear;
`;

const CheckboxLabel = styled.label`
    width: 100%;
    align-self: flex-start;
    margin: 0 0 15px;
    font-size: 11px;
    color: #aaaaaa;
    display: flex;
    align-items: center;
    line-height: 1.8em;
    cursor: pointer;
`;

const Checkbox = styled.input`
    border: 1px solid red;
    margin-right: 10px;
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
    color: #97bfdf;
    font-size: 10px;
    letter-spacing: 0.7px;
`;



const Footer = styled.footer`
    padding: 50px;
    color: #8d8d8d;
    font-size: 10px;
`;
export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [disabled, setDisable] = useState(true);
    const [redirect, setRedirect] = useState(false);

    const emailCheck = new RegExp(/^\S{3,}@\S{2,}\.\D{2,}/);
    const passCheck = new RegExp(/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}/);
    const nameCheck = new RegExp(/[A-Za-z]{3,}/);

    useEffect(() => {
        if(name && lastName && email && password) {
            setDisable(false);
        }
    }, [name, lastName, email, password])

    if(redirect) {
        return <Redirect to='/sign-in' />
    }

    return(
        <Wrapper>
            <LogoBox><Img src='https://image.flaticon.com/icons/png/512/565/565547.png' alt="logo"></Img></LogoBox>
            <Header>Sign up</Header>
            <SignInForm autoComplete='off'>
                <NameBox>
                    <Input 
                    style={{marginRight: '10px'}} 
                    type='text' 
                    placeholder='First Name *' 
                    onChange={e => {
                        const et = e.target;

                        if(et.value === '') {
                            et.style.borderColor = '#424242'
                        } else if(e.target.value.match(nameCheck)) {
                            e.target.style.borderColor = 'green'
                            setName(e.target.value)
                        } else {
                            e.target.style.borderColor = 'red'
                        }
                    }}
                    ></Input>
                    <Input 
                        type='text' 
                        placeholder='Last Name *' 
                        onChange={e => {
                            const et = e.target;

                            if(et.value === '') {
                                et.style.borderColor = '#424242'
                            } else if(et.value.match(nameCheck)) {
                                et.style.borderColor = 'green'
                                setLastName(et.value);
                            } else {
                                et.style.borderColor = 'red'
                            }
                        }}
                    ></Input>
                </NameBox>
                <Input 
                    type='email' 
                    placeholder='Email Adress *' 
                    onChange={ e => {
                        const et = e.target;
                        
                        if(et.value === '') {
                            et.style.borderColor = '#424242'
                        } else if (et.value.match(emailCheck)) {
                            et.style.borderColor = 'green';
                            setEmail(et.value);
                        } else {
                            et.style.borderColor = 'red';
                        }
                    }}>
                </Input>
                <Input 
                    type='password' 
                    placeholder='Password *' 
                    onChange={ e =>  {
                        const et = e.target;

                        if(et.value === '') {
                            et.style.borderColor = '#424242'
                        } else if (et.value.match(passCheck)) {
                            et.style.borderColor = 'green';
                            setPassword(et.value);
                        } else {
                            et.style.borderColor = 'red';
                        }
                    }}>
                </Input>
                <CheckboxLabel>
                    <Checkbox type='checkbox'/>
                    I want to receive inspiration, marketing promotions and updates via email.
                </CheckboxLabel>
                <SubmitInput 
                    disabled={disabled}
                    type='submit' 
                    value='Sign Up' 
                    onClick={() => {
                        localStorage.user = JSON.stringify({
                            name: name,
                            lastName: lastName,
                            email: email,
                            pass: password,
                        });
                        setRedirect(true);
                    }}/>
                <Questions>
                    <span></span>
                    <Link to='/sign-in' style={{textDecoration: 'none', color: '#97bfdf'}}>Already have an account? Sign In</Link>
                </Questions>
                <Footer>Copyright &copy; Your Website 2021.</Footer>


            </SignInForm>

        </Wrapper>
    )
}