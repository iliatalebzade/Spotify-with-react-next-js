const initialState = {
    accountsList: [
        {
            userName: 'sample',
            password: 'hbk',
            playLists: [],
        },
    ],

    loggedAccound:{
        isLogged: false,
        userName: 'User',
        password: 'password',
        playLists: [],
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            return {
                ...state,
                loggedAccound: {
                    isLogged: true,
                    userName: action.payload.userName,
                    password: action.payload.password,
                    playLists: [],
                }
            }
        case 'CREATE_USER':
            return {
                ...state,
                accountsList: [
                    ...state.accountsList,
                    {
                        userName: action.payload.userName,
                        password: action.payload.password,
                        playLists: [],
                    }
                ],
                loggedAccound: {
                    isLogged: true,
                    userName: action.payload.userName,
                    password: action.payload.password,
                    playLists: [],
                }
            }
        case 'LOGOUTER':
            return{
                ...state,
                loggedAccound: {
                    isLogged: false,
                    userName: 'User',
                    password: 'password',
                    playLists: [],
                }
            }
        default:
            return state
    }
}

export default reducer