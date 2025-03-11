import { db } from "@/lib/prisma"

export const getAllRestaurants = async () => {
  const restaurant = await db.restaurant.findMany({
    select: {
      id: true,
      slug: true,
      avatarImageUrl: true,
      name: true,
    }
  });
  return restaurant;
}