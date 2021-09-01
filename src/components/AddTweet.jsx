import React, {useEffect, useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

export default function AddTweet() {
    const [users, setUsers] = useState();
    const [userId, setUserId] = useState('');
    const [content, setContent] = useState('');
    const [image, setImg] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const dataLoad = async () => {
            await fetch('http://domer.tech:9999/users')
                .then(resp => resp.json())
                .then(json => {
                    setUsers(json.data)
                    return {
                        data: json.data
                    }
                })
        }
        dataLoad()
        
    }, [])
    
    const saveTweet = () => async () => {
        const tweet = {
            userId: Number(userId),
            content,
            image
        }

        await fetch('http://domer.tech:9999/tweets', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(tweet)
        })
    }

    const addTweet = () => {
        dispatch(saveTweet())
    }

    return (
        <Wrapper>
        <SignInForm autoComplete='off'>
            <Header>Add tweet</Header>
            <Select 
                reqired 
                value={userId}
                onChange={ e => {
                    setUserId(e.target.value)
                }}>
                    {
                        users ? users.map(user => <option key={user.id} value={user.id}>{user.name}</option>) : <option>Loading...</option>
                    }
                 
            </Select>
            <Textarea
                cols="65"
                rows="10"
                reqired 
                placeholder='Content *'
                value={content}
                onChange={ e =>  {
                    setContent(e.target.value)
                }}>
            </Textarea>
            <Input 
                type='text'
                reqired 
                placeholder='Image link *'
                value={image}
                onChange={ e =>  {
                    setImg(e.target.value)
                }}>
            </Input>
            
            <SubmitInput 
                type='submit' 
                value='Add tweet' 
                onClick={addTweet}/>
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

const Textarea = styled.textarea`
    background: initial;
    border: 1px solid #424242;
    outline: none;
    color: #929292;
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

const Select = styled.select`
padding: 15px;
    margin: 10px;
    width: 100%;
    background: initial;
    border: 1px solid #424242;
    border-radius: 3px;
    outline: none;
    color: #929292;
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
