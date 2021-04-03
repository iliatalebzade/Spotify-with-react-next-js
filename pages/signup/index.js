import React from 'react'
import { Provider } from 'react-redux'

import SignUp from '../../Components/signUpComponents/SignUp'
import store from '../../Redux/store'

const index = () => {
    return (
        <Provider store={store}>
            <SignUp />
        </Provider>
    )
}

export default index
