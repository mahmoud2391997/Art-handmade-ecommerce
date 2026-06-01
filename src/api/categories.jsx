import { dummyCategories, simulateDelay } from "./dummyData";

export default async function getCategories({ setCategories }) {
  await simulateDelay(300);
  setCategories(dummyCategories);
}
