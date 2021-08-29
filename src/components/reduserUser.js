const initialState = {
    users: []
};

export default function reduserUser(state = initialState, action) {
    switch (action.type) {
        case 'addUser': {
            return {
                ...state,
                users: [...state.users, ...action.payload ]
                

            }   
        }
        default:
            return state;
    }
}