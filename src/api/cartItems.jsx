import { dummyCartItems, simulateDelay } from "./dummyData";

export async function getCartItems(token) {
  await simulateDelay(300);
  return dummyCartItems;
}

export async function updateCartItems(cartItemsArray, token) {
  await simulateDelay(300);
  return { success: true };
}
