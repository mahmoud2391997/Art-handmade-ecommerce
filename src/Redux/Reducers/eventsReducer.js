import { FETCH_EVENTS, FETCH_EVENT_BY_ID } from "../actionTypes";


const initialState = {
    events : [],
    status: "idle",
    error: null,
    currentEvent: null,
    loaded: false,
}


export const eventsReducer = ( state = initialState, action) => {
    switch (action.type){
        case FETCH_EVENTS:
            return {
                ...state,
                events: action.payload,
                status: "succeeded",
                loaded: true,
            }
            case FETCH_EVENT_BY_ID: {
                return {
                    ...state,
                    currentEvent: action.payload,
                    status: "succeeded",
                };
                }
        
            
        default:
            return state;
    }
}