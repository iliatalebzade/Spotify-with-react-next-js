import React, { useState } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { createUser } from '../../Redux/Account/action'

import styles from '../../styles/ComponentStyles/signup.module.css'

const SignUp = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    const [content, setContent] = useState({
        userName: '',
        password: '',
        confirmPassword: '',
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

    const confirmPasswordChangeHandler = (e) => {
        setContent({
            ...content,
            confirmPassword: e.target.value,
        })
    }

    const state = useSelector(state => state)

    const submitHandler = (e) => {
        e.preventDefault();
        if(content.password === content.confirmPassword && content.confirmPassword !== '' && content.password !== '' && content.userName !== '') {
            dispatch(createUser(content.userName, content.password))
            router.push('/app/home')
        }else if(content.password === content.confirmPassword) {
            alert('password and confirmation are not the same')
        }else if(content.confirmPassword || '' && content.password !== '' || content.userName !== ''){
            alert('at least one of the fields are left empty')
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.formBox}>
                <div className={styles.Div}>
                    <div className={styles.titleDiv}>
                        <h1>Sign Up</h1>
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
                                type="password"
                                placeholder="Confirm Password"
                                onChange={confirmPasswordChangeHandler}
                                value={content.confirmPassword}
                            />
                            <input type="submit"/>
                        </form>
                        <p>already have an account?
                            <Link href="/login">
                            <a>Sing In!</a>
                            </Link>
                        </p>
                    </div>
                </div>
                <img src="signupbanner.jpg" alt=""/>
            </div>
        </div>
    )
}

export default SignUp
