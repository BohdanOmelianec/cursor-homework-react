import React, {useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

export default function AddUser() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const dispatch = useDispatch();

    
    const saveUser = () => async () => {
        const user = {
            name,
            username: `@${username}`,
            avatar
        }
        await fetch('http://domer.tech:9999/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    const addUser = () => {
        dispatch(saveUser())
    }

    return (
        <Wrapper>
        <SignInForm autoComplete='off'>
            <Header>Add user</Header>
          <Input 
              type='text'
              reqired 
              placeholder='Name *'
              value={name}
              onChange={ e => {
                  setName(e.target.value)
              }}>
          </Input>
          <Input 
              type='text'
              reqired 
              placeholder='Username *'
              value={username}
              onChange={ e =>  {
                setUsername(e.target.value)
              }}>
          </Input>
          <Input 
              type='text'
              reqired 
              placeholder='Link *'
              value={avatar}
              onChange={ e =>  {
                setAvatar(e.target.value)
              }}>
          </Input>
          
          <SubmitInput 
              type='submit' 
              value='Add user' 
              onClick={addUser}/>
        </SignInForm>
        

      </Wrapper>
    );

}





const Wrapper = styled.div`
    width: 650px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #222229;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`;

const SignInForm = styled.form`
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
`;

const Header = styled.p`
    font-size: 18px;
    margin: 10px;
    letter-spacing: 1px;
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

const SubmitInput = styled.input`
    padding: 10px;
    margin: 10px;
    width: 100%;
    background-color: #21DBF3;
    border: none;
    outline: none;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    color: #121212;
    cursor: pointer;
    &:hover {
      background: #1bbdd2;
    }
`;
