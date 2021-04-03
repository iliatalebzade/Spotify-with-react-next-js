import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

import { settingTabSwitch } from '../../Redux/GeneralAppSettings/action'
import { logouter } from '../../Redux/Account/action'

import styles from '../../styles/ComponentStyles/SettingsTab.module.css'

const SettingsPage = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <>
            <div
                className={state.GeneralSettingsReducer.settingsTabFlag ? styles.settingsOverLayActive : styles.settingsOverLayDeactive}
                onClick={()=> dispatch(settingTabSwitch())}
            ></div>
            <div className={state.GeneralSettingsReducer.settingsTabFlag ? styles.InnerBox : styles.innerBoxDeactive}>
                <div>
                    <img src="../avatar.png" alt=""/>
                    <div className={styles.accountInfo}>
                        {state.AccountsReducer.loggedAccound.isLogged === true &&
                            <>
                                <h4><span>Welcome, </span>{state.AccountsReducer.loggedAccound.userName}</h4>
                                <div className={styles.activeSettingOptions}>
                                    <button className={styles.changeAvatarBtn}>Change Avatar</button>
                                </div>
                                <div className="btnBox">
                                    <button 
                                        className={styles.logOutBtn}
                                        onClick={() => dispatch(logouter())}    
                                    >Logout</button>
                                </div>
                            </>
                        }{state.AccountsReducer.loggedAccound.isLogged === false &&
                            <>
                                <h4>You're not signed In!</h4>
                                <h5>Please login or create an account to get the best experience!</h5>
                                <div className="btnBox">
                                    <Link href="/login">
                                    <a>logIn</a>
                                    </Link>

                                    <Link href="/signup">
                                    <a>Sign Up</a>
                                    </Link>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SettingsPage
