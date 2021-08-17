import icon from './hw17/ava.jpg';
import gif from './hw17/tweet.gif';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const postsArr = [
    {
      author: {
        name: "Anakin Skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader"
      },
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: RAY_IMAGE,
      date: "26 Feb."
    },
    {
      author: {
        name: "Twitter",
        photo: icon,
        nickname: "@Twitter"
      },
      content: "You are what you Tweet.",
      image: gif,
      date: "30 June",
    },
    {
      author: {
        name: "Epravda",
        photo: 'https://www.epravda.com.ua/images/v3/ep_symbol.svg',
        nickname: "@epravda"
      },
      content: "Минулого тижня ціни на газ в Європі досягали нових рекордів",
      image: 'https://eimg.pravda.com/images/doc/e/7/e7713a7-------.jpg',
      date: "9 Aug",
    }
  ];

const initialState = {
    data: postsArr,
    comment: 48,
    like: 234,
    repost: 16,
    isChanged: false,
};

export default function reduser(state = initialState, action) {
    switch (action.type) {
        case 'addNewPost': {
            return {
                data: [...state.data, {
                    author: {
                      name: action.info.select,
                      photo: 'https://picsum.photos/70',
                      nickname: `@${action.info.select}`
                    },
                    content: action.info.text,
                    image: action.info.link,
                    date: new Date().toString().slice(4, 10),
                  }]
            }   
        }
        case 'setCounter': {
            if(state.isChanged) {
                return {
                    ...state,
                    [action.button]: state[action.button] -= 1,
                    isChanged: !state.isChanged
                } 
            } else {
                return {
                    ...state,
                    [action.button]: state[action.button] += 1,
                    isChanged: !state.isChanged
                }
            }  
        }
        default:
            return state;
    }
}