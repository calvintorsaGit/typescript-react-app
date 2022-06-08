import {combineReducers, createStore} from 'redux'
import userEventReducer from "./user-events";
import recorderReducer from "./recorder";

const rootReducer = combineReducers({
    userEvents: userEventReducer,
    recorderReducer: recorderReducer
})

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>

export default store
