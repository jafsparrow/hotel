/*
  Warnings:

  - You are about to drop the column `productCode` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "productCode",
ADD COLUMN     "code" INTEGER NOT NULL DEFAULT 1;
