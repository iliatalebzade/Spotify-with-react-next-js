const initialState = {
    songBarStatus: {
        songDuration: 0,
        timePassed: 0,
        seekBarValue: 0,
        playingStatus: false,
        prevLimit: false,
    },
    soundBarStatus: {
        previousValues:{
            prevValue: 5,
        },
        currentValue:{
            isMute: false,
            seekBarValue: 5,
        }
    }
}

const reducer=(state = initialState, action)=>{
    switch(action.type){
        case 'PLAYING_STATUS_SWITCH':
            return{
                ...state,
                songBarStatus: {
                    ...state.songBarStatus,
                    playingStatus: !state.songBarStatus.playingStatus,
                }
            }
        case 'CHANGE_VOLUME':
            return{
                ...state,
                soundBarStatus: {
                    previousValues: {
                        prevValue: action.payload
                    },
                    currentValue: {
                        ...state.soundBarStatus.currentValue,
                        seekBarValue: action.payload
                    }
                }
            }
        case 'MUTE_SWITCH':
            if(action.payload === false){
                return{
                    ...state,
                    soundBarStatus: {
                        ...state.soundBarStatus,
                        currentValue: {
                            ...state.soundBarStatus.currentValue,
                            seekBarValue: 0
                        }
                    }
                }
            }else{
                return{
                    ...state,
                    soundBarStatus: {
                        ...state.soundBarStatus,
                        currentValue: {
                            ...state.soundBarStatus.currentValue,
                            seekBarValue: state.soundBarStatus.previousValues.prevValue
                        }
                    }
                }
            }
        case 'AUDIO_SEEKBAR_SETTER':
            return{
                ...state,
                songBarStatus: {
                    ...state.songBarStatus,
                    seekBarValue: action.payload
                }
            }
        default: return state
    }
}

export default reducer