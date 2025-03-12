"use client";

import { Clock, MapPin, Search, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getAllRestaurants } from "@/data/get-all-restaurants";

interface Restaurant {
  id: string;
  name: string;
  slug: string;
  avatarImageUrl: string;
  categories?: string[];
}

interface HomeProps {
  initialRestaurants: Restaurant[];
}

export default function Home({ initialRestaurants }: HomeProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [restaurants] = useState<Restaurant[]>(initialRestaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(initialRestaurants);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredRestaurants(restaurants);
      return;
    }

    const filtered = restaurants.filter((restaurant: Restaurant) => {
      const nameMatch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());

      const categoriesMatch = restaurant.categories?.some(
        (category: string) => category.toLowerCase().includes(searchTerm.toLowerCase())
      ) || false;

      return nameMatch || categoriesMatch;
    });

    setFilteredRestaurants(filtered);
  }, [searchTerm, restaurants]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <section className="bg-orange-500 text-white py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                Seja bem-vindo(a) ao Restaurant Delivery!
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Descubra os melhores sabores da cidade sem sair de casa.
              </p>

              <form onSubmit={handleSearch} className="relative mt-8">
                <Input
                  className="pl-10 py-6 rounded-full bg-white/90 text-black w-full text-xs"
                  placeholder="Busque por restaurante ou comida"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                {/* <Button
                  type="submit"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-orange-600 hover:bg-orange-700"
                >
                  Buscar
                </Button> */}
              </form>
            </div>
          </div>
          <div className="md:w-2/5 relative h-56 md:h-72">
            <Image
              src="/logo.png"
              alt="Delivery Food"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Nossos Parceiros</h2>
          <p className="text-gray-600">
            {filteredRestaurants.length === 0
              ? ""
              : searchTerm
                ? `${filteredRestaurants.length} restaurante(s) encontrado(s) para "${searchTerm}"`
                : "Escolha um dos nossos restaurantes parceiros para realizar o seu pedido"}
          </p>
        </div>

        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant: Restaurant) => (
              <Link href={`/${restaurant.slug}`} key={restaurant.id} className="block transform transition hover:scale-105">
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="relative h-40 w-full bg-gray-100">
                    <Image
                      src={restaurant.avatarImageUrl}
                      alt={restaurant.name}
                      fill
                      className="object-cover"
                    />
                    {restaurant.slug === "mc-donalds" && (
                      <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Destaque
                      </span>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-orange-500">
                        <Image
                          src={restaurant.avatarImageUrl}
                          alt={restaurant.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-lg text-gray-800">{restaurant.name}</h3>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} className="text-orange-500" />
                        <span>2.5 km</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-orange-500 fill-orange-500" />
                        <span>4.8</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} className="text-orange-500" />
                        <span>25-35 min</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Nenhum restaurante encontrado.</p>
            <Button
              variant="link"
              className="text-orange-500 mt-2"
              onClick={() => setSearchTerm("")}
            >
              Limpar busca
            </Button>
          </div>
        )}
      </section>

      <section className="container mx-auto px-4 py-10 max-w-6xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Categorias mais vistas!</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          {['Pizza', 'Hambúrguer', 'Sushi', 'Brasileira', 'Italiana', 'Saudável', 'Sobremesas', 'Vegetariana'].map((category: string, index: number) => (
            <div key={index} className="snap-start shrink-0">
              <Button
                variant="outline"
                className="rounded-full px-6 py-2 border-orange-200 hover:bg-orange-500 hover:text-white"
                onClick={() => setSearchTerm(category)}
              >
                {category}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 max-w-6xl">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Pedidos Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4 flex items-center gap-3 border-l-4 border-l-orange-500">
            <div className="w-12 h-12 relative rounded-full overflow-hidden">
              <Image
                src="https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQaHB8tslkBUjlHSKiuseLm2hIFzVY0OtxEPnw"
                alt="McDonald's"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">McDonalds</h3>
              <p className="text-sm text-gray-600">Big Mac + Batata + Coca-Cola</p>
            </div>
            <Button variant="outline" size="sm">Pedir novamente</Button>
          </Card>

          <Card className="p-4 flex items-center gap-3 border-l-4 border-l-orange-500">
            <div className="w-12 h-12 relative rounded-full overflow-hidden">
              <Image
                src="https://burgerkingks.com/wp-content/uploads/2020/08/new-whopper-meal-ks-web-offer-v.png"
                alt="Burger King"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">Burger King</h3>
              <p className="text-sm text-gray-600">Whopper + Onion Rings + Milk Shake</p>
            </div>
            <Button variant="outline" size="sm">Pedir novamente</Button>
          </Card>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const initialRestaurants = await getAllRestaurants();

  return {
    props: {
      initialRestaurants,
    },
  };
}