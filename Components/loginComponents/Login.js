import React, { useState } from 'react'

import styles from '../../styles/ComponentStyles/login.module.css'

import { useDispatch, useSelector } from 'react-redux'

import { useRouter } from 'next/router'
import Link from 'next/link'
import { loginUser } from '../../Redux/Account/action'

const Login = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    const [content, setContent] = useState({
        userName: '',
        password: '',
    })

    const userNameChangeHandler = (e) => {
        setContent({
            ...content,
            userName: e.target.value,
        })
    }

    const passwordChangeHandler = (e) => {
        setContent({
            ...content,
            password: e.target.value,
        })
    }

    const state = useSelector(state => state)

    const submitHandler = (e) => {
        e.preventDefault();
        state.AccountsReducer.accountsList.map((item, index) => {
            if(item.userName === content.userName && item.password === content.password){
                dispatch(loginUser(content.userName, content.password))
                router.push('/app/home')
            }
        })
    }

    return (
        <div className={styles.main}>
            <div className={styles.formBox}>
                <div className={styles.Div}>
                    <div className={styles.titleDiv}>
                        <h1>Sign in</h1>
                    </div>
                    <div className={styles.formDiv}>
                        <form onSubmit={submitHandler}>
                            <input
                                type="text"
                                placeholder="Username"
                                onChange={userNameChangeHandler}
                                value={content.userName}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={passwordChangeHandler}
                                value={content.password}
                            />
                            <input
                                type="submit"
                            />
                        </form>

                        <p>don't have an account?
                            <Link href="/signup">
                                <a>create one!</a>
                            </Link>
                        </p>
                    </div>
                </div>
                <img src="loginbanner.jpg" alt=""/>
            </div>
        </div>
    )
}

export default Login
