import { simulateDelay } from "./dummyData";

export default async function stripePayment(orderItems, token) {
  await simulateDelay(1000);
  // In a real app, this would redirect to Stripe checkout
  console.log("Stripe payment initiated for:", orderItems);
  return { success: true, checkoutUrl: "#" };
}
