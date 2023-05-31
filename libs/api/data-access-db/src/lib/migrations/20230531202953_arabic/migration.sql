/*
  Warnings:

  - You are about to drop the column `arabic` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "secondaryLanguageName" TEXT,
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
INSERT INTO "new_Product" ("categoryId", "collectionId", "cost", "createdAt", "hasModifiers", "hasVariant", "id", "image", "inStock", "isArchived", "name", "price", "secondaryLanguageName", "updatedAt") SELECT "categoryId", "collectionId", "cost", "createdAt", "hasModifiers", "hasVariant", "id", "image", "inStock", "isArchived", "name", "price", "secondaryLanguageName", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
