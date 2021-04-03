import React from 'react'
import { Provider } from 'react-redux';

import styles from '../../../styles/ComponentStyles/HomeTemplate.module.css'
import store from '../../../Redux/store'
import Nav from '../../../Components/appComponents/Nav';
import HomeContentPage from '../../../Components/appComponents/HomeContentPage'
import SettingsPage from '../../../Components/appComponents/SettingsPage';

const HomeTemplate = () => {
    return (
        <Provider store={store}>
            <div className={styles.main}>
                <div className={styles.nav}>
                    <Nav />
                </div>
                <div className={styles.ContentAndPlayer}>
                    <HomeContentPage />
                </div>
                <SettingsPage />
            </div>
        </Provider>
    )
}

export default HomeTemplate