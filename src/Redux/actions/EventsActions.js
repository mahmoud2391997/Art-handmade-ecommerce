import { FETCH_EVENTS } from "../actionTypes";
import { fetchEvents, fetchEventById} from '../api/eventsApi'


export const fetchEventsActions = () => async (dispatchEvent, getState) => {
    const { loaded } = getState().events;

    if (!loaded) {
        try {
            const events = await fetchEvents();
            dispatchEvent({
                type: FETCH_EVENTS,
                payload: events,
            });
        } catch (error) {
            console.log("Error Fetching Products", error);
        }
    }
}


export const fetchEventsByIdAction = (eventId) => async (dispatch) => {
    try {
        const event = await fetchEvents(eventId)
        dispatch({
            type: FETCH_EVENTS,
            payload: event,
        });
    } catch (error) {
        console.log("Error Fetching Event", error);
    }
}
