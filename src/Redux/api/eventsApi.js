import { dummyEvents, getEventById, simulateDelay } from "../../api/dummyData";

export const fetchEvents = async () => {
    try {
        await simulateDelay(300);
        return dummyEvents;
    } catch (error) {
        throw error;
    }
}

export const fetchEventById = async (eventId) => {
    try {
        await simulateDelay(300);
        return getEventById(eventId);
    } catch (error) {
        throw error; 
    }
};