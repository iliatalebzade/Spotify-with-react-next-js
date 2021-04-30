import React from 'react'
import Link from 'next/link'

import styles from '../styles/ComponentStyles/EnreringPagePresentor.module.css'

const EnreringPagePresentor = () => {
    return (
        <div className={styles.EnreringPagePresentorMain}>
           <div className={styles.contentBox}>
            <div>
                <h1>Welcome to <span>Spotify</span></h1> 
                <h3>Listening is everything</h3>
            </div>
            <div>

                <Link href="/signup">
                    <a>SignUp</a>
                </Link>

                <Link href="/login">
                    <a>Log In</a>
                </Link>

            </div>

                <Link href="/app/home">
                    <a className={styles.openApp}>open the app</a>
                </Link>
           </div>
        </div>
    )
}

export default EnreringPagePresentor