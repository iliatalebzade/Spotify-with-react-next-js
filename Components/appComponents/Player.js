import React from 'react'
import PlayerSlider from './PlayerSlider'
import { useDispatch, useSelector } from 'react-redux'

import styles from '../../styles/ComponentStyles/Player.module.css'

const Player = ({ pauseSong, playSong, seekbarVal, seekbarChanger, skipBack, skipForward }) => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className={styles.main}>
            <div className={styles.mediaController}>
                <img
                    src="../back.png" 
                    alt="smt"
                    onClick={skipBack}
                />

                {!state.PlayerReducer.songBarStatus.playingStatus &&
                    <img 
                        src="../play-button(1).png" 
                        alt="smt"
                        onClick={playSong}
                    />
                }
                
                {state.PlayerReducer.songBarStatus.playingStatus &&
                    <img 
                        src="../pause.png" 
                        alt="smt"
                        onClick={pauseSong}
                    />
                }

                <img 
                    src="../forward.png" 
                    alt="smt"
                    onClick={skipForward}
                />
            </div>
            <PlayerSlider
                seekbarVal={seekbarVal}
                seekbarChanger={seekbarChanger}
            />
        </div>
    )
}

export default Player