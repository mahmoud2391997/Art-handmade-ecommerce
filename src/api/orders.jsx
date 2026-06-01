import { dummyOrders, simulateDelay } from "./dummyData";

export async function getOrders(token) {
  await simulateDelay(300);
  return dummyOrders;
}

export async function makeOrder(orderDetails, token) {
  await simulateDelay(500);
  return { success: true, orderId: "new-order-" + Date.now() };
}

export async function cancelOrder(orderId, token) {
  await simulateDelay(300);
  return { success: true };
}
