import { PrismaClient } from '@prisma/client';
import { productData, testSample } from './seeddata';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  // await prisma.company.deleteMany();
  // await prisma.orderItem.deleteMany();
  // await prisma.kot.deleteMany();

  // await prisma.category.deleteMany();
  // await prisma.product.deleteMany();

  // await prisma.collection.deleteMany();
  // const createdCollection = await prisma.collection.create({
  //   data: collectionData,
  // });

  // await prisma.company.create({ data: companyData });
  // await prisma.collection.create({
  //   data: {
  //     name: 'Arabic',
  //   },
  // });
  // await prisma.user.create({
  //   data: {
  //     username: 'jafar',
  //     password: 1234,
  //   },
  // });
  // await prisma.category.createMany({
  //   data: [
  //     {
  //       name: 'Mutton',
  //       color: '#eeeeee',
  //       kitchenId: 1,
  //     },
  //     {
  //       name: 'Fish',
  //       color: '#eeeeee',
  //       kitchenId: 1,
  //     },
  //     {
  //       name: 'Juice',
  //       color: '#eeeeee',
  //       kitchenId: 1,
  //     },
  //     {
  //       name: 'Breakfast',
  //       color: '#eeeeee',
  //       kitchenId: 1,
  //     },
  //     {
  //       name: 'Roti',
  //       color: '#eeeeee',
  //       kitchenId: 1,
  //     },
  //     {
  //       name: 'Soup',
  //       color: '#eeeeee',
  //       kitchenId: 1,
  //     },
  //     {
  //       name: 'Salad',
  //       color: '#eeeeee',
  //       kitchenId: 1,
  //     },
  //     {
  //       name: 'Squid',
  //       color: '#eeeeee',
  //       kitchenId: 1,
  //     },
  //     {
  //       name: 'Sausage',
  //       color: '#eeeeee',
  //       kitchenId: 1,
  //     },
  //     {
  //       name: 'Beef',
  //       color: '#eeeeee',
  //       kitchenId: 1,
  //     },
  //     {
  //       name: 'Hammous',
  //       color: '#eeeeee',
  //       kitchenId: 1,
  //     },
  //   ],
  // });
  await prisma.product.createMany(productData);
  // await prisma.product.create({
  //   data: {
  //     name: 'Mutton Masala',
  //     secondaryLanguageName: 'لحم الضأن ماسالا',
  //     collectionId: 1,
  //     categoryId: 1,
  //     cost: 1.7,
  //     price: 1.7,
  //   },
  // });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
