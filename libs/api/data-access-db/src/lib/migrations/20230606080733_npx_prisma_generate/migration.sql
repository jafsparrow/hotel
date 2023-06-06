/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Kot` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Kot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "updatedUserId" INTEGER,
    "kitchenId" INTEGER,
    CONSTRAINT "Kot_updatedUserId_fkey" FOREIGN KEY ("updatedUserId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Kot_kitchenId_fkey" FOREIGN KEY ("kitchenId") REFERENCES "Kitchen" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Kot" ("createdAt", "id", "updatedAt", "updatedUserId") SELECT "createdAt", "id", "updatedAt", "updatedUserId" FROM "Kot";
DROP TABLE "Kot";
ALTER TABLE "new_Kot" RENAME TO "Kot";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
