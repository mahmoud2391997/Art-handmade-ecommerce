import { dummyProducts, getProductById, simulateDelay } from "./dummyData";

export async function getProducts(pageNumber) {
  await simulateDelay(300);
  // Return paginated results
  const startIndex = (pageNumber - 1) * 5;
  const endIndex = startIndex + 5;
  return dummyProducts.slice(startIndex, endIndex);
}

export async function getProduct(productId) {
  await simulateDelay(300);
  return getProductById(productId);
}

export default async function searchProducts(product, page) {
  await simulateDelay(300);
  if (product == "") {
    return getProducts(1);
  } else {
    const filtered = dummyProducts.filter(p => 
      p.name.toLowerCase().includes(product.toLowerCase()) ||
      p.category.toLowerCase().includes(product.toLowerCase())
    );
    return filtered;
  }
}
