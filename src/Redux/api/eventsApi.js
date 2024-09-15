import axios from "axios";

export const fetchEvents = async () => {
    try {
        const response = await axios.get(
            "https://art-ecommerce-server.glitch.me/api/events"
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchEventById = async (eventId) => {
    try {
        const response = await axios.get(`https://art-ecommerce-server.glitch.me/api/events/${eventId}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
};