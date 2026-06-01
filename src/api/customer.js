import { dummyProfile, simulateDelay } from "./dummyData";

export async function getCustomerInfo(token) {
  await simulateDelay(300);
  return dummyProfile;
}
