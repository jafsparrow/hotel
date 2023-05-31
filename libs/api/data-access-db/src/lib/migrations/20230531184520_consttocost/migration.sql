/*
  Warnings:

  - You are about to drop the column `const` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `kitchenId` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `cost` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "secondaryLanguageName" TEXT,
    "arabic" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "cost" REAL NOT NULL,
    "image" TEXT NOT NULL DEFAULT '',
    "inStock" BOOLEAN NOT NULL DEFAULT true,
    "hasVariant" BOOLEAN NOT NULL DEFAULT false,
    "hasModifiers" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "collectionId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Product_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("arabic", "categoryId", "collectionId", "createdAt", "hasModifiers", "hasVariant", "id", "image", "inStock", "isArchived", "name", "price", "updatedAt") SELECT "arabic", "categoryId", "collectionId", "createdAt", "hasModifiers", "hasVariant", "id", "image", "inStock", "isArchived", "name", "price", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "kitchenId" INTEGER NOT NULL,
    "isAvailableAllDay" BOOLEAN NOT NULL DEFAULT true,
    "startTime" TEXT NOT NULL DEFAULT '',
    "endTime" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Category_kitchenId_fkey" FOREIGN KEY ("kitchenId") REFERENCES "Kitchen" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Category" ("color", "endTime", "id", "isAvailableAllDay", "kitchenId", "name", "startTime") SELECT "color", "endTime", "id", "isAvailableAllDay", "kitchenId", "name", "startTime" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
