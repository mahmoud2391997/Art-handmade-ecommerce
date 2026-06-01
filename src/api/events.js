import { dummyEvents, getEventById, simulateDelay } from "./dummyData";

export async function getEvents() {
  await simulateDelay(300);
  return dummyEvents;
}

export async function getEvent(eventId) {
  await simulateDelay(300);
  return getEventById(eventId);
}
