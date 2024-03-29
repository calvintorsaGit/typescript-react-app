import React from "react";
import {Action} from "redux";
import {RootState} from "./store";

interface RecorderState {
    dateStart: string
}

const START = 'recorder/start';
const STOP = 'recorder/stop';

type StartAction = Action<typeof START>
type StopAction = Action<typeof STOP>

export const selectDateStart = (rootState: RootState) => rootState.recorderReducer.dateStart

export const start = (): StartAction => ({
    type: START
})

export const stop = (): StopAction => ({
    type: STOP
})

const initialState: RecorderState = {
    dateStart: ''
}

const recorderReducer = (
    state: RecorderState = initialState,
    action: StartAction | StopAction
) => {
    switch (action.type) {
        case START:
            return {...state, dateStart: new Date().toISOString()};
        case STOP:
            return {...state, dateStart: ''}
        default:
            return state;
    }
}

export default recorderReducer;
