/*
  Warnings:

  - You are about to drop the column `arabic` on the `company` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "secondaryLanguageName" TEXT NOT NULL DEFAULT 'add other laguage',
    "logoUrl" TEXT NOT NULL,
    "lastOrderNumber" INTEGER NOT NULL,
    "caption" TEXT NOT NULL,
    "footer" TEXT NOT NULL,
    "currencyCode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "lat" TEXT DEFAULT '',
    "long" TEXT DEFAULT ''
);
INSERT INTO "new_company" ("address", "caption", "currencyCode", "footer", "id", "lastOrderNumber", "lat", "logoUrl", "long", "name") SELECT "address", "caption", "currencyCode", "footer", "id", "lastOrderNumber", "lat", "logoUrl", "long", "name" FROM "company";
DROP TABLE "company";
ALTER TABLE "new_company" RENAME TO "company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
