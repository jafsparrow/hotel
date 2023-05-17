-- CreateTable
CREATE TABLE "User" (
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
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "arabic" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "const" REAL NOT NULL,
    "image" TEXT NOT NULL DEFAULT '',
    "inStock" BOOLEAN NOT NULL DEFAULT true,
    "hasVariant" BOOLEAN NOT NULL DEFAULT false,
    "hasModifiers" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "collectionId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Product_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "kitchenId" TEXT NOT NULL,
    "isAvailableAllDay" BOOLEAN NOT NULL DEFAULT true,
    "startTime" TEXT NOT NULL DEFAULT '',
    "endTime" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Kitchen" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "printer" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Variant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "Variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Modifier" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "Modifier_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderNumber" INTEGER NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "orderStatus" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "kotNumber" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "arabic" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "lastOrderNumber" INTEGER NOT NULL,
    "caption" TEXT NOT NULL,
    "footer" TEXT NOT NULL,
    "currencyCode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "lat" TEXT DEFAULT '',
    "long" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "Tax" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "printName" TEXT NOT NULL,
    "isPercentage" BOOLEAN NOT NULL DEFAULT true,
    "value" REAL NOT NULL,
    "companyId" INTEGER,
    CONSTRAINT "Tax_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderNumber_key" ON "Order"("orderNumber");
