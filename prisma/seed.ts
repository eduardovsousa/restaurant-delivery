/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    // Limpa todos os restaurantes (e consequentemente categorias e produtos relacionados)
    await tx.restaurant.deleteMany();

    // -----------------------------
    // Restaurante: MC Donalds
    // -----------------------------
    const mcdonalds = await tx.restaurant.create({
      data: {
        name: "MC Donalds",
        slug: "mc-donalds",
        description: "O melhor fast food do mundo",
        avatarImageUrl:
          "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQvcNP9rHlEJu1vCY5kLqzjf29HKaeN78Z6pRy",
        coverImageUrl:
          "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQac8bHYlkBUjlHSKiuseLm2hIFzVY0OtxEPnw",
      },
    });

    // Combos
    const combosCategoryMc = await tx.menuCategory.create({
      data: {
        name: "Combos",
        restaurantId: mcdonalds.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "McOferta Média Big Mac Duplo",
          description:
            "Quatro hambúrgueres (100% carne bovina), alface americana, queijo fatiado sabor cheddar, molho especial, cebola, picles e pão com gergelim, acompanhamento e bebida.",
          price: 39.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQaHB8tslkBUjlHSKiuseLm2hIFzVY0OtxEPnw",
          menuCategoryId: combosCategoryMc.id,
          restaurantId: mcdonalds.id,
          ingredients: [
            "Pão com gergelim",
            "Hambúrguer de carne 100% bovina",
            "Alface americana",
            "Queijo fatiado sabor cheddar",
            "Molho especial",
            "Cebola",
            "Picles",
          ],
        },
        {
          name: "Novo Brabo Melt Onion Rings",
          description:
            "Dois hambúrgueres de carne 100% bovina, méquinese, a exclusiva maionese especial com sabor de carne defumada, onion rings, fatias de bacon, queijo processado sabor cheddar, o delicioso molho lácteo com queijo tipo cheddar tudo isso no pão tipo brioche trazendo uma explosão de sabores pros seus dias de glória! Acompanhamento e Bebida.",
          price: 41.5,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQeGQofnEPyQaHEV2WL8rGUs41oMICtYfNkphl",
          menuCategoryId: combosCategoryMc.id,
          restaurantId: mcdonalds.id,
          ingredients: [
            "Pão tipo brioche",
            "Hambúrguer de carne 100% bovina",
            "Méquinese",
            "Maionese especial com sabor de carne defumada",
            "Onion rings",
            "Fatias de bacon",
            "Queijo processado sabor cheddar",
            "Molho lácteo com queijo tipo cheddar",
          ],
        },
        {
          name: "McCrispy Chicken Elite",
          description:
            "Composto por pão tipo brioche com batata, molho Honey&Fire, bacon em fatias, alface, tomate, queijo sabor cheddar e carne 100% de peito de frango, temperada e empanada, acompanhamento e bebida.",
          price: 39.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQr12aTqPo3SsGjBJCaM7yhxnbDlXeL5N9dckv",
          menuCategoryId: combosCategoryMc.id,
          restaurantId: mcdonalds.id,
          ingredients: [
            "Pão tipo brioche",
            "Batata",
            "Molho Honey&Fire",
            "Bacon em fatias",
            "Alface",
            "Tomate",
            "Queijo sabor cheddar",
            "Carne 100% de peito de frango",
          ],
        },
        {
          name: "Duplo Cheddar McMelt",
          description:
            "Dois hambúrgueres (100% carne bovina), molho lácteo com queijo tipo cheddar, cebola ao molho shoyu e pão escuro com gergelim, acompanhamento e bebida.",
          price: 36.2,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQWdq0w8niS9XCLQu7Nb4jvBYZze16goaOqsKR",
          menuCategoryId: combosCategoryMc.id,
          restaurantId: mcdonalds.id,
          ingredients: [
            "Pão escuro com gergelim",
            "Hambúrguer de carne 100% bovina",
            "Molho lácteo com queijo tipo cheddar",
            "Cebola ao molho shoyu",
          ],
        },
      ],
    });

    // Lanches
    const lanchesCategoryMc = await tx.menuCategory.create({
      data: {
        name: "Lanches",
        restaurantId: mcdonalds.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Big Mac",
          description:
            "Quatro hambúrgueres (100% carne bovina), alface americana, queijo fatiado sabor cheddar, molho especial, cebola, picles e pão com gergelim, acompanhamento e bebida.",
          ingredients: [
            "Pão com gergelim",
            "Hambúrguer de carne 100% bovina",
            "Alface americana",
            "Queijo fatiado sabor cheddar",
            "Molho especial",
            "Cebola",
            "Picles",
          ],
          price: 39.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQKfI6fivqActTvBGLXfQe4a8CJ6d3HiR7USPK",
          menuCategoryId: lanchesCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
        {
          name: "Duplo Quarterão",
          description:
            "Dois hambúrgueres de carne 100% bovina, méquinese, a exclusiva maionese especial com sabor de carne defumada, onion rings, fatias de bacon, queijo processado sabor cheddar, o delicioso molho lácteo com queijo tipo cheddar tudo isso no pão tipo brioche trazendo uma explosão de sabores pros seus dias de glória! Acompanhamento e Bebida.",
          ingredients: [
            "Pão tipo brioche",
            "Hambúrguer de carne 100% bovina",
            "Méquinese",
            "Maionese especial com sabor de carne defumada",
            "Onion rings",
            "Fatias de bacon",
            "Queijo processado sabor cheddar",
            "Molho lácteo com queijo tipo cheddar",
          ],
          price: 41.5,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ99rtECuYaDgmA4VujBU0wKn2ThXJvF3LHfyc",
          menuCategoryId: lanchesCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
        {
          name: "McMelt",
          description:
            "Composto por pão tipo brioche com batata, molho Honey&Fire, bacon em fatias, alface, tomate, queijo sabor cheddar e carne 100% de peito de frango, temperada e empanada, acompanhamento e bebida.",
          ingredients: [
            "Pão tipo brioche",
            "Batata",
            "Molho Honey&Fire",
            "Bacon em fatias",
            "Alface",
            "Tomate",
            "Queijo sabor cheddar",
            "Carne 100% de peito de frango",
          ],
          price: 39.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQUY0VlDTmvPeJLoyOjzNsMqFdxUI423nBl6br",
          menuCategoryId: lanchesCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
        {
          name: "McNífico Bacon",
          description:
            "Dois hambúrgueres (100% carne bovina), molho lácteo com queijo tipo cheddar, cebola ao molho shoyu e pão escuro com gergelim, acompanhamento e bebida.",
          ingredients: [
            "Pão escuro com gergelim",
            "Hambúrguer de carne 100% bovina",
            "Molho lácteo com queijo tipo cheddar",
            "Cebola ao molho shoyu",
          ],
          price: 36.2,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQBBmifbjzEVXRoycAtrP9vH45bZ6WDl3QF0a1",
          menuCategoryId: lanchesCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
      ],
    });

    // Fritas
    const frenchFriesCategoryMc = await tx.menuCategory.create({
      data: {
        name: "Fritas",
        restaurantId: mcdonalds.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Fritas Grande",
          description: "Batatas fritas crocantes e sequinhas. Vem bastante!",
          ingredients: [],
          price: 10.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQNd3jSNrcJroaszwjUAlM6iSO5ZTx2HV70t31",
          menuCategoryId: frenchFriesCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
        {
          name: "Fritas Média",
          description:
            "Batatas fritas crocantes e sequinhas. Vem uma média quantidade!",
          ingredients: [],
          price: 9.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ7Y6lv9tkc0L9oMIXZsFJtwnBh2KCz3y6uSW1",
          menuCategoryId: frenchFriesCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
        {
          name: "Fritas Pequena",
          description:
            "Batatas fritas crocantes e sequinhas. Vem pouquinho (é bom pra sua dieta)!",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ5toOZxYa1oARJCUGh4EY3x8NjXHtvZ7lnVfw",
          menuCategoryId: frenchFriesCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
      ],
    });

    // Bebidas
    const drinksCategoryMc = await tx.menuCategory.create({
      data: {
        name: "Bebidas",
        restaurantId: mcdonalds.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Coca-cola",
          description: "Coca-cola gelada para acompanhar seu lanche.",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQJS1b33q29eEsh0CVmOywrqx1UPnJpRGcHN5v",
          menuCategoryId: drinksCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
        {
          name: "Fanta Laranja",
          description: "Fanta Laranja gelada para acompanhar seu lanche.",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQW7Kxm9gniS9XCLQu7Nb4jvBYZze16goaOqsK",
          menuCategoryId: drinksCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
        {
          name: "Água Mineral",
          description: "A bebida favorita do Cristiano Ronaldo.",
          ingredients: [],
          price: 2.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ7i05S5tkc0L9oMIXZsFJtwnBh2KCz3y6uSW1",
          menuCategoryId: drinksCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
      ],
    });

    // Sobremesas
    const desertsCategoryMc = await tx.menuCategory.create({
      data: {
        name: "Sobremesas",
        restaurantId: mcdonalds.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Casquinha de Baunilha",
          description: "Casquinha de sorvete sabor baunilha.",
          ingredients: [],
          price: 3.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQtfuQrAKkI75oJfPT0crZxvX82ui9qV3hLFdY",
          menuCategoryId: desertsCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
        {
          name: "Casquinha de Chocolate",
          description: "Casquinha de sorvete sabor chocolate.",
          ingredients: [],
          price: 3.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQBH21ijzEVXRoycAtrP9vH45bZ6WDl3QF0a1M",
          menuCategoryId: desertsCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
        {
          name: "Casquinha de Mista",
          description: "Casquinha de sorvete sabor baunilha e chocolate.",
          ingredients: [],
          price: 2.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ4rBrtULypXmR6JiWuhzS8ALjVkrF3yfatC7E",
          menuCategoryId: desertsCategoryMc.id,
          restaurantId: mcdonalds.id,
        },
      ],
    });

    // -----------------------------
    // Restaurante: Burger King
    // -----------------------------
    const burgerKing = await tx.restaurant.create({
      data: {
        name: "Burger King",
        slug: "burger-king",
        description: "O rei dos hambúrgueres flame-grilled",
        avatarImageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6WNmQqdTs5JPSmPYIknhVZ8TrCBNxpBog_zOhd6W5BvPSm998kx2RunPTW2kmMhEDxQ&usqp=CAU",
        coverImageUrl:
          "https://files.sunoresearch.com.br/n/uploads/2019/02/burger-king-800x450.jpg",
      },
    });

    // Combos (4 produtos)
    const combosCategoryBK = await tx.menuCategory.create({
      data: {
        name: "Combos",
        restaurantId: burgerKing.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Whopper Combo",
          description:
            "Combo Whopper com hambúrguer flame-grilled, queijo, alface, tomate, cebola e picles. Acompanhado de fritas e bebida.",
          price: 39.9,
          imageUrl:
            "https://burgerkingks.com/wp-content/uploads/2020/08/new-whopper-meal-ks-web-offer-v.png",
          menuCategoryId: combosCategoryBK.id,
          restaurantId: burgerKing.id,
          ingredients: [
            "Pão",
            "Hambúrguer flame-grilled",
            "Queijo",
            "Alface",
            "Tomate",
            "Cebola",
            "Picles",
          ],
        },
        {
          name: "King's Double Combo",
          description:
            "Combo com dois hambúrgueres flame-grilled, bacon, queijo cheddar e molho especial, acompanhado de fritas e bebida.",
          price: 41.5,
          imageUrl:
            "https://burgerkingmenus.com/wp-content/uploads/2024/03/Double-Bundle.webp",
          menuCategoryId: combosCategoryBK.id,
          restaurantId: burgerKing.id,
          ingredients: [
            "Pão",
            "Dois hambúrgueres flame-grilled",
            "Bacon",
            "Queijo cheddar",
            "Molho especial",
          ],
        },
        {
          name: "Chicken Royale Combo",
          description:
            "Combo com sanduíche de frango empanado, alface, tomate e maionese, acompanhado de fritas e bebida.",
          price: 37.0,
          imageUrl:
            "https://burgerkingks.com/wp-content/uploads/2020/08/chickenroyale-new-meal.png",
          menuCategoryId: combosCategoryBK.id,
          restaurantId: burgerKing.id,
          ingredients: [
            "Pão",
            "Filé de frango empanado",
            "Alface",
            "Tomate",
            "Maionese",
          ],
        },
        {
          name: "Veggie King Combo",
          description:
            "Combo vegetariano com hambúrguer de grão-de-bico, alface, tomate, cebola roxa e molho tahini, acompanhado de fritas e bebida.",
          price: 36.2,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDhTFjXNVS0zxA9iUoO2RrVN3YFf6HvoTyw&s",
          menuCategoryId: combosCategoryBK.id,
          restaurantId: burgerKing.id,
          ingredients: [
            "Pão",
            "Hambúrguer de grão-de-bico",
            "Alface",
            "Tomate",
            "Cebola roxa",
            "Molho tahini",
          ],
        },
      ],
    });

    // Lanches (4 produtos)
    const lanchesCategoryBK = await tx.menuCategory.create({
      data: {
        name: "Lanches",
        restaurantId: burgerKing.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Whopper",
          description:
            "Hambúrguer flame-grilled com ingredientes frescos, servido com acompanhamento e bebida.",
          price: 39.9,
          imageUrl:
            "https://d3sn2rlrwxy0ce.cloudfront.net/_800x600_crop_center-center_none/whopper-thumb_2021-09-16-125319_mppe.png?mtime=20210916125320&focal=none&tmtime=20241024164409g",
          menuCategoryId: lanchesCategoryBK.id,
          restaurantId: burgerKing.id,
          ingredients: [
            "Pão",
            "Hambúrguer flame-grilled",
            "Queijo",
            "Alface",
            "Tomate",
            "Cebola",
            "Picles",
          ],
        },
        {
          name: "Double Cheeseburger",
          description:
            "Dois hambúrgueres flame-grilled com queijo, bacon e molho especial, servido com acompanhamento e bebida.",
          price: 41.5,
          imageUrl:
            "https://d3sn2rlrwxy0ce.cloudfront.net/Cheeseburger_duplo-interna.png?mtime=20230202110309&focal=none",
          menuCategoryId: lanchesCategoryBK.id,
          restaurantId: burgerKing.id,
          ingredients: [
            "Pão",
            "Dois hambúrgueres flame-grilled",
            "Queijo",
            "Bacon",
            "Molho especial",
          ],
        },
        {
          name: "BK Chicken",
          description:
            "Sanduíche de frango empanado com alface e maionese, servido com acompanhamento e bebida.",
          price: 39.9,
          imageUrl:
            "https://d3sn2rlrwxy0ce.cloudfront.net/BK-Chicken-Crispy-thumb.png?mtime=20230125075509&focal=none",
          menuCategoryId: lanchesCategoryBK.id,
          restaurantId: burgerKing.id,
          ingredients: [
            "Pão",
            "Filé de frango empanado",
            "Alface",
            "Maionese",
          ],
        },
        {
          name: "Bacon King",
          description:
            "Hambúrguer flame-grilled com bacon crocante, queijo cheddar e molho especial, servido com acompanhamento e bebida.",
          price: 36.2,
          imageUrl:
            "https://d3sn2rlrwxy0ce.cloudfront.net/_800x600_crop_center-center_none/Stacker-DP-1.png?mtime=20221203101410&focal=none&tmtime=20241024164409",
          menuCategoryId: lanchesCategoryBK.id,
          restaurantId: burgerKing.id,
          ingredients: [
            "Pão",
            "Hambúrguer flame-grilled",
            "Bacon",
            "Queijo cheddar",
            "Molho especial",
          ],
        },
      ],
    });

    // Fritas (3 produtos)
    const frenchFriesCategoryBK = await tx.menuCategory.create({
      data: {
        name: "Fritas",
        restaurantId: burgerKing.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Fritas Grandes",
          description: "Batatas fritas crocantes e generosas.",
          ingredients: [],
          price: 10.9,
          imageUrl:
            "https://d3sn2rlrwxy0ce.cloudfront.net/Batata-Frita.png?mtime=20221203102947&focal=none",
          menuCategoryId: frenchFriesCategoryBK.id,
          restaurantId: burgerKing.id,
        },
        {
          name: "Fritas Médias",
          description: "Batatas fritas na medida certa.",
          ingredients: [],
          price: 9.9,
          imageUrl:
            "https://d3sn2rlrwxy0ce.cloudfront.net/Batata-Frita.png?mtime=20221203102947&focal=none",
          menuCategoryId: frenchFriesCategoryBK.id,
          restaurantId: burgerKing.id,
        },
        {
          name: "Fritas Pequenas",
          description: "Porção pequena de batatas fritas crocantes.",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://d3sn2rlrwxy0ce.cloudfront.net/Batata-Frita.png?mtime=20221203102947&focal=none",
          menuCategoryId: frenchFriesCategoryBK.id,
          restaurantId: burgerKing.id,
        },
      ],
    });

    // Bebidas (3 produtos)
    const drinksCategoryBK = await tx.menuCategory.create({
      data: {
        name: "Bebidas",
        restaurantId: burgerKing.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Coca-cola",
          description: "Coca-cola gelada para acompanhar seu lanche.",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQJS1b33q29eEsh0CVmOywrqx1UPnJpRGcHN5v",
          menuCategoryId: drinksCategoryBK.id,
          restaurantId: burgerKing.id,
        },
        {
          name: "Fanta Laranja",
          description: "Fanta Laranja gelada para acompanhar seu lanche.",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQW7Kxm9gniS9XCLQu7Nb4jvBYZze16goaOqsK",
          menuCategoryId: drinksCategoryBK.id,
          restaurantId: burgerKing.id,
        },
        {
          name: "Água Mineral",
          description: "Bebida refrescante para acompanhar seu lanche.",
          ingredients: [],
          price: 2.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ7i05S5tkc0L9oMIXZsFJtwnBh2KCz3y6uSW1",
          menuCategoryId: drinksCategoryBK.id,
          restaurantId: burgerKing.id,
        },
      ],
    });

    // Sobremesas (3 produtos)
    const desertsCategoryBK = await tx.menuCategory.create({
      data: {
        name: "Sobremesas",
        restaurantId: burgerKing.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Sundae Caramelo",
          description: "Delicioso sundae com calda de caramelo.",
          ingredients: [],
          price: 3.9,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmoHYV_mUjPPhZ8jPp_9tmLWhlaKoH3g_MA&s",
          menuCategoryId: desertsCategoryBK.id,
          restaurantId: burgerKing.id,
        },
        {
          name: "Sundae Chocolate",
          description: "Delicioso sundae com calda de chocolate.",
          ingredients: [],
          price: 3.9,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9dP9R7P3Wb7bQpw5UIx9rOUE-BD5_1RJMw&s",
          menuCategoryId: desertsCategoryBK.id,
          restaurantId: burgerKing.id,
        },
        {
          name: "Milkshake Morango",
          description: "Milkshake cremoso de morango.",
          ingredients: [],
          price: 2.9,
          imageUrl:
            "https://d3sn2rlrwxy0ce.cloudfront.net/Nova-embalagem_Shake-Morango.png?mtime=20240604104134&focal=none",
          menuCategoryId: desertsCategoryBK.id,
          restaurantId: burgerKing.id,
        },
      ],
    });

    // -----------------------------
    // Restaurante: Madeiro
    // -----------------------------
    const madeiro = await tx.restaurant.create({
      data: {
        name: "Madeiro",
        slug: "madeiro",
        description: "Culinária com toques da tradição e sabores autênticos",
        avatarImageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/9/95/Logo_Madero.jpg",
        coverImageUrl:
          "https://master.restaurantemadero.com.br/upload/galeria-foto/25/1600x900pxcontainer-primavera-garden-1600x900-02.jpg",
      },
    });

    // Combos (4 produtos)
    const combosCategoryMadeiro = await tx.menuCategory.create({
      data: {
        name: "Combos",
        restaurantId: madeiro.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Combo Madeiro Tradicional",
          description:
            "Combo com hambúrguer artesanal, batata rústica e molho especial, acompanhado de bebida.",
          price: 35.0,
          imageUrl:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1",
          menuCategoryId: combosCategoryMadeiro.id,
          restaurantId: madeiro.id,
          ingredients: [
            "Pão artesanal",
            "Hambúrguer artesanal",
            "Batata rústica",
            "Molho especial",
          ],
        },
        {
          name: "Combo Madeiro Especial",
          description:
            "Combo com hambúrguer duplo, queijo artesanal e molho defumado, acompanhado de batatas e bebida.",
          price: 37.0,
          imageUrl:
            "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1",
          menuCategoryId: combosCategoryMadeiro.id,
          restaurantId: madeiro.id,
          ingredients: [
            "Pão artesanal",
            "Dois hambúrgueres artesanais",
            "Queijo artesanal",
            "Molho defumado",
          ],
        },
        {
          name: "Combo Madeiro Frango",
          description:
            "Combo com sanduíche de frango grelhado, alface, tomate e maionese artesanal, acompanhado de batatas e bebida.",
          price: 33.5,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMxwWVyPjMm1bjHI49IeMyLVfG5NZIWK8ig&s",
          menuCategoryId: combosCategoryMadeiro.id,
          restaurantId: madeiro.id,
          ingredients: [
            "Pão artesanal",
            "Filé de frango grelhado",
            "Alface",
            "Tomate",
            "Maionese artesanal",
          ],
        },
        {
          name: "Combo Madeiro Duplo",
          description:
            "Combo com hambúrguer duplo, bacon crocante e molho especial, acompanhado de batatas rústicas e bebida.",
          price: 36.2,
          imageUrl:
            "https://miro.medium.com/v2/resize:fit:881/0*VDfUECBOFpJjx6_2.jpg",
          menuCategoryId: combosCategoryMadeiro.id,
          restaurantId: madeiro.id,
          ingredients: [
            "Pão artesanal",
            "Dois hambúrgueres artesanais",
            "Bacon crocante",
            "Molho especial",
          ],
        },
      ],
    });

    // Lanches (4 produtos)
    const lanchesCategoryMadeiro = await tx.menuCategory.create({
      data: {
        name: "Lanches",
        restaurantId: madeiro.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Madeiro Tradicional",
          description:
            "Hambúrguer artesanal com queijo, alface e tomate, acompanhado de batatas rústicas.",
          price: 35.0,
          imageUrl:
            "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1",
          menuCategoryId: lanchesCategoryMadeiro.id,
          restaurantId: madeiro.id,
          ingredients: [
            "Pão artesanal",
            "Hambúrguer artesanal",
            "Queijo",
            "Alface",
            "Tomate",
          ],
        },
        {
          name: "Madeiro Duplo",
          description:
            "Dois hambúrgueres artesanais com queijo e molho especial, acompanhado de batatas rústicas.",
          price: 37.0,
          imageUrl:
            "https://miro.medium.com/v2/resize:fit:881/0*VDfUECBOFpJjx6_2.jpg",
          menuCategoryId: lanchesCategoryMadeiro.id,
          restaurantId: madeiro.id,
          ingredients: [
            "Pão artesanal",
            "Dois hambúrgueres artesanais",
            "Queijo",
            "Molho especial",
          ],
        },
        {
          name: "Madeiro Chicken",
          description:
            "Sanduíche de frango grelhado com alface e maionese, acompanhado de batatas rústicas.",
          price: 35.0,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMxwWVyPjMm1bjHI49IeMyLVfG5NZIWK8ig&s",
          menuCategoryId: lanchesCategoryMadeiro.id,
          restaurantId: madeiro.id,
          ingredients: [
            "Pão artesanal",
            "Filé de frango grelhado",
            "Alface",
            "Maionese",
          ],
        },
        {
          name: "Madeiro Veggie",
          description:
            "Hambúrguer vegetariano com grão-de-bico, alface e molho tahini, acompanhado de batatas rústicas.",
          price: 33.5,
          imageUrl:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1",
          menuCategoryId: lanchesCategoryMadeiro.id,
          restaurantId: madeiro.id,
          ingredients: [
            "Pão artesanal",
            "Hambúrguer de grão-de-bico",
            "Alface",
            "Molho tahini",
          ],
        },
      ],
    });

    // Fritas (3 produtos)
    const frenchFriesCategoryMadeiro = await tx.menuCategory.create({
      data: {
        name: "Fritas",
        restaurantId: madeiro.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Fritas Grandes",
          description: "Batatas fritas crocantes e sequinhas.",
          ingredients: [],
          price: 10.9,
          imageUrl:
            "https://master.restaurantemadero.com.br/assets/site/images/M-CTN_CestadeBatatasFritas.jpg",
          menuCategoryId: frenchFriesCategoryMadeiro.id,
          restaurantId: madeiro.id,
        },
        {
          name: "Fritas Médias",
          description: "Batatas fritas na medida ideal.",
          ingredients: [],
          price: 9.9,
          imageUrl:
            "https://master.restaurantemadero.com.br/assets/site/images/M-CTN_CestadeBatatasFritas.jpg",
          menuCategoryId: frenchFriesCategoryMadeiro.id,
          restaurantId: madeiro.id,
        },
        {
          name: "Fritas Pequenas",
          description: "Porção pequena de batatas fritas crocantes.",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://master.restaurantemadero.com.br/assets/site/images/M-CTN_CestadeBatatasFritas.jpg",
          menuCategoryId: frenchFriesCategoryMadeiro.id,
          restaurantId: madeiro.id,
        },
      ],
    });

    // Bebidas (3 produtos)
    const drinksCategoryMadeiro = await tx.menuCategory.create({
      data: {
        name: "Bebidas",
        restaurantId: madeiro.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Refrigerante",
          description: "Refrigerante gelado para acompanhar seu lanche.",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQJS1b33q29eEsh0CVmOywrqx1UPnJpRGcHN5v",
          menuCategoryId: drinksCategoryMadeiro.id,
          restaurantId: madeiro.id,
        },
        {
          name: "Suco Natural",
          description: "Suco natural fresco, ideal para acompanhar seu lanche.",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz73MFbCe-n1Ofg5H-3bncZcs8AJCIJ9cdow&s",
          menuCategoryId: drinksCategoryMadeiro.id,
          restaurantId: madeiro.id,
        },
        {
          name: "Água Mineral",
          description: "Água mineral refrescante.",
          ingredients: [],
          price: 2.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ7i05S5tkc0L9oMIXZsFJtwnBh2KCz3y6uSW1",
          menuCategoryId: drinksCategoryMadeiro.id,
          restaurantId: madeiro.id,
        },
      ],
    });

    // Sobremesas (3 produtos)
    const desertsCategoryMadeiro = await tx.menuCategory.create({
      data: {
        name: "Sobremesas",
        restaurantId: madeiro.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Sobremesa de Chocolate",
          description: "Deliciosa sobremesa com chocolate.",
          ingredients: [],
          price: 3.9,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2FUkcYV-6gNtDvNg-yxucbbUhr56_wr_9Q&s",
          menuCategoryId: desertsCategoryMadeiro.id,
          restaurantId: madeiro.id,
        },
        {
          name: "Sobremesa de Baunilha",
          description: "Deliciosa sobremesa com sabor de baunilha.",
          ingredients: [],
          price: 3.9,
          imageUrl:
            "https://www.contextomidia.com.br/site/wp-content/uploads/2016/09/Sorvete-de-vanilla-com-calda-de-chocolate.jpg",
          menuCategoryId: desertsCategoryMadeiro.id,
          restaurantId: madeiro.id,
        },
        {
          name: "Sobremesa Mista",
          description: "Sobremesa com uma combinação de sabores.",
          ingredients: [],
          price: 2.9,
          imageUrl:
            "https://static.wixstatic.com/media/368834_661db2caebb742b3b224eb6713a51ffc~mv2.png/v1/fill/w_534,h_764,al_c,lg_1,q_90/368834_661db2caebb742b3b224eb6713a51ffc~mv2.png",
          menuCategoryId: desertsCategoryMadeiro.id,
          restaurantId: madeiro.id,
        },
      ],
    });
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
