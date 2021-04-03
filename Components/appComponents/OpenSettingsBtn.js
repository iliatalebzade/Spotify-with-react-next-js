import React from 'react'
import { useDispatch } from 'react-redux'
import { settingTabSwitch } from '../../Redux/GeneralAppSettings/action'

import styles from '../../styles/ComponentStyles/OpenSettingsBtn.module.css'

const OpenSettingsBtn = () => {

    const dispatch = useDispatch()

    return (
        <div className={styles.settingBtnMain}>
            <div onClick={()=> dispatch(settingTabSwitch())}>
                <img src="../more.png" alt="" />
            </div>
        </div>
    )
}

export default OpenSettingsBtn
