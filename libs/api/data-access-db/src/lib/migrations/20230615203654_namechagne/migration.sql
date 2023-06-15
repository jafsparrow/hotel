/*
  Warnings:

  - You are about to drop the column `capcacity` on the `table` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "capacity" INTEGER,
    "floorId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "table_floorId_fkey" FOREIGN KEY ("floorId") REFERENCES "floor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_table" ("floorId", "id", "name") SELECT "floorId", "id", "name" FROM "table";
DROP TABLE "table";
ALTER TABLE "new_table" RENAME TO "table";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
