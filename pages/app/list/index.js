import React from 'react'
import { Provider } from 'react-redux';
import store from '../../../Redux/store'

import Nav from '../../../Components/appComponents/Nav';

import styles from '../../../styles/ComponentStyles/ListTemplate.module.css'
import ListContentPage from '../../../Components/appComponents/ListContentPage';
import SettingsPage from '../../../Components/appComponents/SettingsPage';

const Index = () => {
    return (
        <div className={styles.main}>
            <Provider store={store}>
            <div className={styles.main}>
                <div className={styles.nav}>
                    <Nav />
                </div>
                <div className={styles.ContentAndPlayer}>
                    <ListContentPage />
                </div>
                <SettingsPage />
            </div>
        </Provider>
        </div>
    )
}

export default Index