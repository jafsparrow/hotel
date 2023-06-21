-- CreateTable
CREATE TABLE "posSession" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "createdUserId" INTEGER NOT NULL,
    CONSTRAINT "posSession_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
