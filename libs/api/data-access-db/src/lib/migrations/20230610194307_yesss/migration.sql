/*
  Warnings:

  - You are about to drop the column `productId` on the `modifier` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orderItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customeKey" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "kotNumber" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "userId" INTEGER,
    "status" TEXT,
    "orderItemType" TEXT NOT NULL DEFAULT 'new',
    "count" INTEGER NOT NULL,
    "modifiers" TEXT NOT NULL DEFAULT '',
    "amount" REAL NOT NULL DEFAULT 0,
    CONSTRAINT "orderItem_kotNumber_fkey" FOREIGN KEY ("kotNumber") REFERENCES "kot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orderItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_orderItem" ("count", "customeKey", "id", "kotNumber", "modifiers", "name", "orderId", "orderItemType", "status", "userId") SELECT "count", "customeKey", "id", "kotNumber", "modifiers", "name", "orderId", "orderItemType", "status", "userId" FROM "orderItem";
DROP TABLE "orderItem";
ALTER TABLE "new_orderItem" RENAME TO "orderItem";
CREATE TABLE "new_modifier" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "modifierGroupId" INTEGER,
    CONSTRAINT "modifier_modifierGroupId_fkey" FOREIGN KEY ("modifierGroupId") REFERENCES "modifierGroup" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_modifier" ("id", "modifierGroupId", "name", "price") SELECT "id", "modifierGroupId", "name", "price" FROM "modifier";
DROP TABLE "modifier";
ALTER TABLE "new_modifier" RENAME TO "modifier";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
