/*
  Warnings:

  - Added the required column `createForUserId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdUserId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customeKey` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderNumber" INTEGER NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "orderStatus" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdUserId" INTEGER NOT NULL,
    "createForUserId" INTEGER NOT NULL,
    CONSTRAINT "Order_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Order_createForUserId_fkey" FOREIGN KEY ("createForUserId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("createdAt", "id", "orderNumber", "orderStatus", "paymentStatus", "updatedAt", "userId") SELECT "createdAt", "id", "orderNumber", "orderStatus", "paymentStatus", "updatedAt", "userId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE UNIQUE INDEX "Order_orderNumber_key" ON "Order"("orderNumber");
CREATE TABLE "new_OrderItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customeKey" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "kotNumber" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "userId" INTEGER,
    "status" TEXT,
    "kitchenUserId" INTEGER NOT NULL,
    "orderItemType" TEXT NOT NULL DEFAULT 'new',
    "count" INTEGER NOT NULL,
    "modifiers" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_kitchenUserId_fkey" FOREIGN KEY ("kitchenUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrderItem" ("count", "id", "kitchenUserId", "kotNumber", "modifiers", "name", "orderId", "orderItemType", "status", "userId") SELECT "count", "id", "kitchenUserId", "kotNumber", "modifiers", "name", "orderId", "orderItemType", "status", "userId" FROM "OrderItem";
DROP TABLE "OrderItem";
ALTER TABLE "new_OrderItem" RENAME TO "OrderItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
