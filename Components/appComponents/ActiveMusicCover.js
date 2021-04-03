import { getConfirmLocale } from 'antd/lib/modal/locale'
import React from 'react'
import { useSelector } from 'react-redux'

import styles from '../../styles/ComponentStyles/activeMusicCover.module.css'

const ActiveMusicCover = () => {

    const state = useSelector(state => state)

    return (
        <div className={styles.main}>
            <img src={state.Songsreducer.selectedSong.coverSrc} alt=""/>
        </div>
    )
}

export default ActiveMusicCover
