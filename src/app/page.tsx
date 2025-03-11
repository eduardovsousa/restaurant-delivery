import Image from "next/image";
import Link from "next/link";

import { getAllRestaurants } from "@/data/get-all-restaurants";

export default async function Home() {

  const restaurants = await getAllRestaurants()
  return (
    <div className="flex flex-col items-center justify-center p-5 w-full h-full gap-20">
      <div>
        <h1>Seja bem-vindo(a) ao Restaurant Delivery!</h1>
        <p>Escolha um dos nossos parceiros para realizar o seu pedido.</p>
      </div>

      <div className="grid grid-cols-3">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="border-2 p-3 rounded-lg">
            <Link href={`${restaurant.slug}`} className="flex flex-col items-center justify-center">
              <div className="w-10 h-10 relative">
                <Image src={restaurant.avatarImageUrl} alt={restaurant.name} fill className="object-contain" />
              </div>
              <p>{restaurant.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
