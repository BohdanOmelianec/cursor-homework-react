import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch} from 'react-redux';


function Author({user}) {
    return (
      <div className="author_block">
          <span className="author_name">{user.name}</span>
          <span className="author_nickname">{user.username}</span>
          <span className="post_date">{'20 Aug'}</span>
      </div>
    )
  }
  
function Content({content}) {
    return (
      <div className="content">
        <h3 className="post_content">{content.content}</h3>
        <img 
          className="post_img"
          src={content.image}
          alt="content img"
        />
      </div>
    )
}

function Post({users, content}) {

  return (
    <div className="post_card">
      <img 
          className="author_img"
          src={users[0]?.avatar}
          alt="avatar"
      />
      <div className="container">
        <Author user={users[0]} />
        <Content content={content} />

      </div>
    </div>
  );
}

export default function Tweets() {
    const dispatch = useDispatch();
    const [users, setUsers] = useState();
    const [content, setContent] = useState();

    useEffect(() => {
        const dataLoad = async () => {
            const data = await fetch('http://domer.tech:9999/users')
                .then(resp => resp.json())
                .then(json => json.data)
                .then(users => fetch('http://domer.tech:9999/tweets')
                    .then(resp => resp.json())
                    .then(json => {
                        setUsers(users)
                        setContent(json.data)
                        return {
                            users,
                            content: json.data
                        }
                    }))
            if(data) {
                dispatch({
                    type: 'ADD_TWEETS',
                    users: data.users,
                    content: data.content
                })
            }
        }
        dataLoad()
        
    }, [])

    return (
        <div>
            {
                users && content ? content.map(contentItem => <Post
                  key={contentItem.id}
                  content={contentItem} 
                  users={users.filter(user => contentItem.userId === user.id)}/>) : 'Loading...'
            }
        </div>
    );
}
