import { PrismaClient } from '@prisma/client';
import { categoryData, collectionData, companyData } from './seeddata';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  // await prisma.company.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.kot.deleteMany();

  await prisma.category.deleteMany();
  await prisma.product.deleteMany();

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
  for (const category of categoryData) {
    const createdCat = await prisma.category.create({
      data: category,
    });
    console.log(`Created user with id: ${createdCat.id}`);
  }
  console.log(`Seeding finished.`);
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
