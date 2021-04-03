import {createStore} from 'redux';
import { combineReducers } from 'redux'
import Songsreducer from './Songs/reducer'
import PlayerReducer from './Player/reducer'
import GeneralSettingsReducer from './GeneralAppSettings/reducer';
import AccountsReducer from './Account/reducer'

const combinedReducers = combineReducers({
    Songsreducer,
    PlayerReducer,
    GeneralSettingsReducer,
    AccountsReducer,
})

const store = createStore(combinedReducers)

export default store