import React from 'react'
import Nav from './Nav'
import HomeContentPage from './HomeContentPage';

import styles from '../../styles/ComponentStyles/HomeTemplate.module.css'

const HomeTemplate = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <Nav />
            </div>
            <div className={styles.ContentAndPlayer}>
                <HomeContentPage />
            </div>
        </div>
    )
}

export default HomeTemplate
