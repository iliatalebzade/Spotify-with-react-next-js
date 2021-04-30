import React from 'react'
import SoundSlider from './SoundSlider'
import { useSelector } from 'react-redux'

import styles from '../../styles/ComponentStyles/soundDiv.module.css'

const SoundDiv = ({soundValueUpdater, soundMuteSwitch}) => {

    const state = useSelector(state => state)

    let songBarValue = state.PlayerReducer.soundBarStatus.currentValue.seekBarValue

    return (
        <div className={styles.soundMain}>
            <div className={styles.soundBarContainer}>
                <div className={styles.soundIconDiv} onClick={soundMuteSwitch}>
                
                {songBarValue > 7 &&
                    <img
                        src="../highSound.png"
                        alt=""
                    />
                }
                {songBarValue >= 3 && songBarValue <= 7 &&
                    <img
                        src="../midSound.png"
                        alt=""
                    />
                }
                {songBarValue < 3 && songBarValue >= 1 &&
                    <img
                        src="../lowSound.png"
                        alt=""
                    />
                }
                {songBarValue === 0 &&
                    <img
                        src="../muteSound.png"
                        alt=""
                    />
                }

                </div>
                <div className={styles.soundSliderContainer}>
                    <SoundSlider
                        seekBarValue={songBarValue}
                        soundValueUpdater={soundValueUpdater}
                    />
                </div>
            </div>
        </div>
    )
}

export default SoundDiv
