import React from 'react'

import styles from '../../styles/ComponentStyles/namesDiv.module.css'

import { useSelector } from 'react-redux'

const NamesDiv = () => {

    const state = useSelector(state => state)

    return (
        <div className={styles.main}>
            <h4>{state.Songsreducer.selectedSong.songName}</h4>
            <h4>{state.Songsreducer.selectedSong.artist}</h4>
        </div>
    )
}

export default NamesDiv
