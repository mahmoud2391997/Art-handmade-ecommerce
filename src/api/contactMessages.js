import { simulateDelay } from "./dummyData";

export async function sendMessage(message) {
  await simulateDelay(500);
  return { success: true, message: "Message sent successfully" };
}
