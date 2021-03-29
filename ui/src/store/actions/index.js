import * as actionTypes from "./actionTypes";
//import axios from 'axios';

export const setData = (payload) => ({
    type: actionTypes.SET_DATA,
    payload,
    /* if (!state) {
        return async (dispatch, getState) => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log(response);
            dispatch({
                type: "FETCH_DATA",
                payload: response
            });
        }
    } */
});

export const setLatitude = (payload) => ({
    type: actionTypes.LATITUDE,
    payload,
});

export const setLongitude = (payload) => ({
    type: actionTypes.LONGITUDE,
    payload,
});

export const setMinMag = (payload) => ({
    type: actionTypes.MIN_MAG,
    payload,
});

export const setMaxRadius = (payload) => ({
    type: actionTypes.MAX_RADIUS,
    payload,
});

export const setStartTime = (payload) => ({
    type: actionTypes.START_TIME,
    payload,
});

export const setEndTime = (payload) => ({
    type: actionTypes.END_TIME,
    payload,
});

export const setEndIndex = (payload) => ({
    type: actionTypes.END_INDEX,
    payload,
})

export const setMinMagFilters = (payload) => ({
    type: actionTypes.MAG_FILTERS,
    payload,
});
