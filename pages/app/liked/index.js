import React from 'react'
import Nav from '../../../Components/appComponents/Nav';
import HomeContentPage from '../../../Components/appComponents/HomeContentPage'
import LikedContentPage from '../../../Components/appComponents/LikedContentPage'

import styles from '../../../styles/ComponentStyles/LikedTemplate.module.css'
import { Provider } from 'react-redux';
import store from '../../../Redux/store'
import SettingsPage from '../../../Components/appComponents/SettingsPage';

const index = () => {
    return (
        <Provider store={store}>
            <div className={styles.main}>
                <div className={styles.nav}>
                    <Nav />
                </div>
                <div className={styles.ContentAndPlayer}>
                    <LikedContentPage />
                </div>
                <SettingsPage />
            </div>
        </Provider>
    )
}

export default index
