import HomeClient from "@/components/homeClient";
import { getAllRestaurants } from "@/data/get-all-restaurants";

export default async function HomePage() {
  const initialRestaurants = await getAllRestaurants();
  
  return <HomeClient initialRestaurants={initialRestaurants} />;
}