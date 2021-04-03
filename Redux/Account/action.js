const CREATE_USER = 'CREATE_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUTER = 'LOGOUTER'


const createUser = (userName, password) => ({type: CREATE_USER, payload:{userName, password}})
const loginUser = (userName, password) => ({type: LOGIN_USER, payload:{userName, password}})
const logouter = () => ({type: LOGOUTER})

export {
    createUser,
    loginUser,
    logouter,
}