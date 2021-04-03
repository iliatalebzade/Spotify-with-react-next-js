const PLAYING_STATUS_SWITCH = 'PLAYING_STATUS_SWITCH'
const NEXT_SONG = 'NEXT_SONG'
const PREV_SONG = 'PREV_SONG'
const CHANGE_VOLUME = 'CHANGE_VOLUME'
const MUTE_SWITCH = 'MUTE_SWITCH'
const AUDIO_SEEKBAR_SETTER = 'AUDIO_SEEKBAR_SETTER'

const playingStatusSwitch = () => ({type: PLAYING_STATUS_SWITCH})
const skipAhead = () => ({type: NEXT_SONG})
const skipBack = () => ({type: PREV_SONG})

const changeVolume = (value) => ({type: CHANGE_VOLUME, payload: value})
const muteSwitch = (value) => ({type: MUTE_SWITCH, payload: value})

const audioSeekbarSetter = (value) => ({type: AUDIO_SEEKBAR_SETTER, payload: value})

export {
    playingStatusSwitch,
    changeVolume,
    muteSwitch,
    audioSeekbarSetter,
}