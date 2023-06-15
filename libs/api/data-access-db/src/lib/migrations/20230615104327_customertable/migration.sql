-- CreateTable
CREATE TABLE "customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "secondName" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'table'
);

-- CreateTable
CREATE TABLE "tableSeats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "tableId" INTEGER NOT NULL,
    CONSTRAINT "tableSeats_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "table" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderNumber" INTEGER NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "orderStatus" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "tableId" INTEGER,
    "createdUserId" INTEGER NOT NULL,
    "orderType" TEXT NOT NULL DEFAULT 'table',
    "customerName" TEXT,
    "customerId" INTEGER DEFAULT 1,
    CONSTRAINT "order_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "table" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "order_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_order" ("createdAt", "createdUserId", "customerName", "id", "orderNumber", "orderStatus", "orderType", "paymentStatus", "tableId", "updatedAt") SELECT "createdAt", "createdUserId", "customerName", "id", "orderNumber", "orderStatus", "orderType", "paymentStatus", "tableId", "updatedAt" FROM "order";
DROP TABLE "order";
ALTER TABLE "new_order" RENAME TO "order";
CREATE UNIQUE INDEX "order_orderNumber_key" ON "order"("orderNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
