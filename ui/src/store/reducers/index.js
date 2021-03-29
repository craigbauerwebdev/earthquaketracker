import * as actionTypes from "../actions/actionTypes";
import { combineReducers } from 'redux';
import { formatDate } from "../../utils/formatDate";

/* const initialState = {
    startTime: null,
    endTime: null,
} */

const setDataReducer = (state = [], action) => {
    if (action.type === actionTypes.SET_DATA) {
        return action.payload
    }
    return state;
}

const latitudeReducer = (state = "0", action) => {
    if (action.type === actionTypes.LATITUDE) {
        return action.payload
    }
    return state;
}

const longitudeReducer = (state = "0", action) => {
    if (action.type === actionTypes.LONGITUDE) {
        return action.payload
    }
    return state;
}

const minMagReducer = (state = "1", action) => {
    if (action.type === actionTypes.MIN_MAG) {
        return action.payload
    }
    return state;
}

const maxRadiusReducer = (state = "20000", action) => {
    if (action.type === actionTypes.MAX_RADIUS) {
        return action.payload
    }
    return state;
}

const startTimeReducer = (state = "1970-1-1", action) => {
    if (action.type === actionTypes.START_TIME) {
        return action.payload
    }
    return state;
}

const endTimeReducer = (state = formatDate(new Date()), action) => {
    if (action.type === actionTypes.END_TIME) {
        return action.payload
    }
    return state;
}

const endIndexReducer = (state = "20", action) => {
    if (action.type === actionTypes.END_INDEX) {
        return action.payload
    }
    return state;
}

const setMinMagFiltersReducer = (state = [], action) => {
    if (action.type === actionTypes.MAG_FILTERS) {
        return action.payload
    }
    return state;
}

export default combineReducers({
    data: setDataReducer,
    latitude: latitudeReducer,
    longitude: longitudeReducer,
    minMag: minMagReducer,
    maxRadius: maxRadiusReducer,
    start: startTimeReducer,
    end: endTimeReducer,
    endIndex: endIndexReducer,
    minMagFilters: setMinMagFiltersReducer,
});