import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styles from '../../styles/ComponentStyles/mediaPlayer.module.css'
import NamesDiv from './NamesDiv'
import Player from './Player'
import SoundDiv from './SoundDiv'

import { 
    playingStatusSwitch, 
    changeVolume, 
    muteSwitch,
    audioSeekbarSetter,
} from '../../Redux/Player/action'

import { skip } from '../../Redux/Songs/action'

const MediaPlayer = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [muteFlag, setMuteFlag] = useState(false)
    let songBarValue = state.PlayerReducer.soundBarStatus.currentValue.seekBarValue

    useEffect(() => {
        let audio = document.getElementById("audio")
        audio.volume = songBarValue/10
    })

    const seekBarValueUpdater=()=>{
        setInterval(()=> {
            let audio = document.getElementById("audio")
            let seekBarDuration = (audio.currentTime*100) / audio.duration
            dispatch(audioSeekbarSetter(seekBarDuration))
        }, 10)
    }
    

    const soundValueUpdater = (value) => {
        dispatch(changeVolume(value))
    }

    const soundMuteSwitch = () => {
        setMuteFlag(!muteFlag)
        dispatch(muteSwitch(muteFlag))
    }

    const playSong = () => {
        let audio = document.getElementById("audio")
        audio.play()
        seekBarValueUpdater()
        dispatch(playingStatusSwitch())
    }

    const pauseSong = () => {
        let audio = document.getElementById("audio")
        audio.pause()
        dispatch(playingStatusSwitch())
    }

    const seekBar = (value) => {
        let audio = document.getElementById("audio")
        audio.currentTime = value/100*audio.duration
    }

    const skipForwardBtn = () => {
        let limit = true
        let activeSong = state.Songsreducer.selectedSong
        let songsList = state.Songsreducer.songs

        songsList.map((item, index) => {
            if(activeSong.index+1 === item.index){
                dispatch(skip(item))
            }
        })
    }

    const skipBackBtn = () => {
        let limit = true
        let activeSong = state.Songsreducer.selectedSong
        let songsList = state.Songsreducer.songs
        let audio = document.getElementById("audio")

        songsList.map((item, index) => {
            if(activeSong.index-1 === item.index){
                if(Math.floor(audio.currentTime) < 15){
                    dispatch(skip(item))
                } else if(Math.floor(audio.currentTime) > 15){
                    audio.currentTime = 0
                }
            }
        })
    }

    return (
        <div className={styles.main}>
            {state.Songsreducer.selectedSong.songName === "Song" &&
                <div className={state.Songsreducer.selectedSong.songName === "Song" ? styles.unactiveOverlay : ''}></div>
            }
            <div className={styles.NamesDiv}>
                <NamesDiv />
            </div>
            <div className={styles.PlayerDiv}>
                <Player
                    pauseSong={pauseSong}
                    playSong={playSong}
                    seekbarVal={state.PlayerReducer.songBarStatus.seekBarValue}
                    seekbarChanger={seekBar}
                    skipBack={skipBackBtn}
                    skipForward={skipForwardBtn}
                />
            </div>
            <div className={styles.soundDiv}>
                <SoundDiv
                    soundValueUpdater={soundValueUpdater}
                    soundMuteSwitch={soundMuteSwitch}
                />
            </div>

            <audio id="audio" src={state.Songsreducer.selectedSong.src}/>

        </div>
    )
}

export default MediaPlayer