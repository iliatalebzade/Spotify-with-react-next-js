const initialState = {
    settingsTabFlag: false
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case 'SETTINGS_TAB_SWITCH':
        return{
            ...state,
            settingsTabFlag: !state.settingsTabFlag
        }
    default:
        return state
    }
}

export default reducer