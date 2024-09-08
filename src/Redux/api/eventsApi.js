import axios from "axios";

export const fetchEvents = async () => {
    try {
        const response = await axios.get(
            "https://art-ecommerce-server.glitch.me/api/events"
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error fetching events:", error);
        throw error;
    }
}

export const fetchEventById = async (eventId) => {
    try {
        const response = await axios.get(
            `https://art-ecommerce-server.glitch.me/api/events/${eventId}`
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error fetching event by ID:", error);
        throw error;
    }
}