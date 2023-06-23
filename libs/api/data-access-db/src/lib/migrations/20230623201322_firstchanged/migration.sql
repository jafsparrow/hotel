-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" INTEGER NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isCashier" BOOLEAN NOT NULL DEFAULT false,
    "isWaiter" BOOLEAN NOT NULL DEFAULT true,
    "isKitchenUser" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "secondaryLanguageName" TEXT,
    "price" REAL NOT NULL,
    "cost" REAL NOT NULL,
    "image" TEXT NOT NULL DEFAULT '',
    "inStock" BOOLEAN NOT NULL DEFAULT true,
    "hasVariant" BOOLEAN NOT NULL DEFAULT false,
    "hasModifiers" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "collectionId" INTEGER NOT NULL,
    "qwickViewOrder" INTEGER DEFAULT 1,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "product_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "collection" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "kitchenId" INTEGER NOT NULL,
    "isAvailableAllDay" BOOLEAN NOT NULL DEFAULT true,
    "startTime" TEXT NOT NULL DEFAULT '',
    "endTime" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "category_kitchenId_fkey" FOREIGN KEY ("kitchenId") REFERENCES "kitchen" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "collection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "kitchen" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "printer" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "variant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "modifier" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "modifierGroupId" INTEGER,
    CONSTRAINT "modifier_modifierGroupId_fkey" FOREIGN KEY ("modifierGroupId") REFERENCES "modifierGroup" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

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

-- CreateTable
CREATE TABLE "order" (
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

-- CreateTable
CREATE TABLE "customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL DEFAULT 'Spider',
    "type" TEXT NOT NULL DEFAULT 'table'
);

-- CreateTable
CREATE TABLE "orderItem" (
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

-- CreateTable
CREATE TABLE "kot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "updatedUserId" INTEGER,
    "kitchenId" INTEGER,
    CONSTRAINT "kot_updatedUserId_fkey" FOREIGN KEY ("updatedUserId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "kot_kitchenId_fkey" FOREIGN KEY ("kitchenId") REFERENCES "kitchen" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "company" (
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
    "long" TEXT DEFAULT '',
    "decimalZeros" INTEGER DEFAULT 3
);

-- CreateTable
CREATE TABLE "tax" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "printName" TEXT NOT NULL,
    "isPercentage" BOOLEAN NOT NULL DEFAULT true,
    "value" REAL NOT NULL,
    "companyId" INTEGER,
    CONSTRAINT "tax_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "floor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "capacity" INTEGER,
    "floorId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "table_floorId_fkey" FOREIGN KEY ("floorId") REFERENCES "floor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tableSeats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "tableId" INTEGER NOT NULL,
    CONSTRAINT "tableSeats_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "table" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "posSession" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "createdUserId" INTEGER NOT NULL,
    CONSTRAINT "posSession_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "order_orderNumber_key" ON "order"("orderNumber");
