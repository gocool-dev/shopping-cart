import { CartsResponse } from "../types/Cart.types";

const BASE_URL = "https://dummyjson.com";

/**
 * Fetch all carts from the API
 */
export const fetchCarts = async (): Promise<CartsResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/carts/1`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching carts:", error);
    throw error;
  }
};
