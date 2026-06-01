import { dummyCartItems, simulateDelay } from "../../api/dummyData";

export const updateCartItems = async (cartItemsArray) => {
  try {
    await simulateDelay(300);
    return { success: true };
  } catch (error) {
    throw error
  }
};

export const getCartItems = async () => {
  try {
    await simulateDelay(300);
    return dummyCartItems;
  } catch (error) {
    throw error
  }
};
