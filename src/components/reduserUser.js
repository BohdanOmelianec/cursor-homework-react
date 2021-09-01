const initialState = {
    users: [],
    content: []
};



export default function reduserUser(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TWEETS': {
            return {
                ...state,
                users: [...action.users],
                content: [...action.content]
                
            }   
        }
        case 'GET_USERS': {
            return {
                ...state,
                
                users: [...state.users, ...action.payload ],
                content: [...state.content, ...action.content]
            }
        }
        default:
            return state;
    }
}