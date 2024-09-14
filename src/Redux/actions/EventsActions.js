import { FETCH_EVENTS, FETCH_EVENT_BY_ID } from "../actionTypes";
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
            throw error
        }
    }
}


export const fetchEventsByIdAction = (eventId) => async (dispatch) => {
    try {
        const event = await fetchEventById(eventId)
        dispatch({
            type: FETCH_EVENT_BY_ID,
            payload: event,
        });
    } catch (error) {
        throw error
    }
}
