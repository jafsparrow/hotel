-- CreateTable
CREATE TABLE "modifierGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT,
    "price" REAL,
    "image" TEXT,
    "printName" TEXT,
    "printModifiersAsItems" BOOLEAN NOT NULL DEFAULT false,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "modifierGroup_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_modifier" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "modifierGroupId" INTEGER,
    CONSTRAINT "modifier_modifierGroupId_fkey" FOREIGN KEY ("modifierGroupId") REFERENCES "modifierGroup" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_modifier" ("id", "name", "price", "productId") SELECT "id", "name", "price", "productId" FROM "modifier";
DROP TABLE "modifier";
ALTER TABLE "new_modifier" RENAME TO "modifier";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
