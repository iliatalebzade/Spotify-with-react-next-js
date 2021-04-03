import React from 'react'
import { Provider } from 'react-redux'
import store from '../../Redux/store'

import Login from '../../Components/loginComponents/Login'


const index = () => {
    return (
        <Provider store={store}>
            <Login />
        </Provider>
    )
}

export default index
