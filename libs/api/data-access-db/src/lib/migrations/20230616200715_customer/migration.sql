/*
  Warnings:

  - You are about to drop the column `secondName` on the `customer` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL DEFAULT 'Spider',
    "type" TEXT NOT NULL DEFAULT 'table'
);
INSERT INTO "new_customer" ("firstName", "id", "type") SELECT "firstName", "id", "type" FROM "customer";
DROP TABLE "customer";
ALTER TABLE "new_customer" RENAME TO "customer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
