import { simulateDelay } from "./dummyData";

export async function buyTicket(eventId, clientInfo, token) {
  await simulateDelay(500);
  return { success: true, ticketId: "ticket-" + Date.now() };
}
