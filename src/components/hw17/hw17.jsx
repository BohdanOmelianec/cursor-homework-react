import React, {useState} from 'react';
import './style17.css';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';


function Author({user, date}) {
  return (
    <div className="author_block">
        <span className="author_name">{user.name}</span>
        <span className="author_nickname">{user.nickname}</span>
        <span className="post_date">{date}</span>
    </div>
  )
}

function Content(props) {
  return (
    <div className="content">
      <h3 className="post_content">{props.content}</h3>
      <img 
        className="post_img"
        src={props.image}
        alt="content img"
      />
    </div>
  )
}

function Icons() {
  const [comment, setComment] = useState(48);
  const [like, setLike] = useState(234);
  const [repost, setRepost] = useState(16);
  const [ChangedComment, ChangeComment] = useState(false);
  const [ChangedLike, ChangeLike] = useState(false);
  const [ChangedRepost, ChangeRepost] = useState(false);


  return (
    <div className="icons">
      <div className="icon_div">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon" 
        onClick={() => {
          if(ChangedComment) {
            setComment(comment - 1);
            ChangeComment(false);
          } else {
            setComment(comment + 1);
            ChangeComment(true);
          }
        }}>
          <g>
            <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">
            </path>
          </g>
        </svg>
        <span>{comment}</span>
      </div>
      <div className="icon_div">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon"
        onClick={() => {
          if(ChangedRepost) {
            setRepost(repost - 1);
            ChangeRepost(false);
          } else {
            setRepost(repost + 1);
            ChangeRepost(true);
          }
        }}>
          <g>
            <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
          </g>
        </svg>
        <span>{repost}</span>
      </div>
      <div className="icon_div">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon"
        onClick={() => {
          if(ChangedLike) {
            setLike(like - 1);
            ChangeLike(false);
          } else {
            setLike(like + 1);
            ChangeLike(true);
          }
        }}>
          <g>
            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
            </path>
          </g>
        </svg>
        <span>{like}</span>
      </div>
      <div className="icon_div">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
          <g>
            <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
            <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
          </g>
        </svg>
      </div>
    </div>
  )
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

const Select = styled(Input)`
    
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

function PostForm(props) {
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [select, setSelect] = useState('Author 1');
  const dispach = useDispatch();
  
  const addPost = {
    type: 'addNewPost',
    info: {
      text,
      link,
      select,
    }
  }

  return(
      <Wrapper>
        <SignInForm autoComplete='off'>
          <Input 
              type='text'
              reqired 
              placeholder='Text *'
              value={text}
              onChange={ e => {
                  setText(e.target.value)
              }}>
          </Input>
          <Input 
              type='text'
              reqired 
              placeholder='Link to the image *'
              value={link}
              onChange={ e =>  {
                setLink(e.target.value)
              }}>
          </Input>
          <Select
              as='select' 
              value={select}
              onChange={ e =>  {
                setSelect(e.target.value)
              }}>
              <option>Jim_Burton</option>
              <option>Kesy_O'donell</option>
              <option>Mike_Curry</option>
          </Select>
          
          <SubmitInput 
              type='submit' 
              value='Add post' 
              onClick={e => {
                e.preventDefault();
                dispach(addPost);
                setText('');
                setLink('');
              }}/>
        </SignInForm>

      </Wrapper>
  )
}

function Post({item}) {
  return (
    <div className="post_card">
      <img 
          className="author_img"
          src={item.author.photo}
          alt="avatar"
      />
      <div className="container">
        <Author user={item.author} date={item.date} />
        <Content content={item.content} image={item.image}/>
        <Icons />
      </div>
    </div>
  );
}

function Tweets() {
  const postsArr = useSelector(state => state.data);
  return (
    <>
      {postsArr.map(item => <Post key={item.content.toString()} item={item}/>)}
      <PostForm />
    </>
  )
}

export default Tweets;