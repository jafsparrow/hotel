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
    "productId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "orderItem_kotNumber_fkey" FOREIGN KEY ("kotNumber") REFERENCES "kot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orderItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "orderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orderItem" ("amount", "count", "customeKey", "id", "kotNumber", "modifiers", "name", "orderId", "orderItemType", "status", "userId") SELECT "amount", "count", "customeKey", "id", "kotNumber", "modifiers", "name", "orderId", "orderItemType", "status", "userId" FROM "orderItem";
DROP TABLE "orderItem";
ALTER TABLE "new_orderItem" RENAME TO "orderItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
