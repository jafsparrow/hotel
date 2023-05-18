
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.14.1
 * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
 */
Prisma.prismaVersion = {
  client: "4.14.1",
  engine: "d9a4c5988f480fa576d43970d5a23641aa77bc9c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  kitchenId: 'kitchenId',
  isAvailableAllDay: 'isAvailableAllDay',
  startTime: 'startTime',
  endTime: 'endTime'
};

exports.Prisma.CollectionScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  arabic: 'arabic',
  logoUrl: 'logoUrl',
  lastOrderNumber: 'lastOrderNumber',
  caption: 'caption',
  footer: 'footer',
  currencyCode: 'currencyCode',
  address: 'address',
  lat: 'lat',
  long: 'long'
};

exports.Prisma.KitchenScalarFieldEnum = {
  id: 'id',
  name: 'name',
  printer: 'printer'
};

exports.Prisma.ModifierScalarFieldEnum = {
  id: 'id',
  name: 'name',
  price: 'price',
  productId: 'productId'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  name: 'name',
  kotNumber: 'kotNumber',
  orderId: 'orderId',
  userId: 'userId'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  orderNumber: 'orderNumber',
  paymentStatus: 'paymentStatus',
  orderStatus: 'orderStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  arabic: 'arabic',
  price: 'price',
  const: 'const',
  image: 'image',
  inStock: 'inStock',
  hasVariant: 'hasVariant',
  hasModifiers: 'hasModifiers',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isArchived: 'isArchived',
  collectionId: 'collectionId',
  categoryId: 'categoryId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TaxScalarFieldEnum = {
  id: 'id',
  name: 'name',
  printName: 'printName',
  isPercentage: 'isPercentage',
  value: 'value',
  companyId: 'companyId'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  name: 'name',
  phone: 'phone',
  isAdmin: 'isAdmin',
  isCashier: 'isCashier',
  isWaiter: 'isWaiter',
  isKitchenUser: 'isKitchenUser'
};

exports.Prisma.VariantScalarFieldEnum = {
  id: 'id',
  name: 'name',
  price: 'price',
  productId: 'productId'
};


exports.Prisma.ModelName = {
  User: 'User',
  Product: 'Product',
  Category: 'Category',
  Collection: 'Collection',
  Kitchen: 'Kitchen',
  Variant: 'Variant',
  Modifier: 'Modifier',
  Order: 'Order',
  OrderItem: 'OrderItem',
  Company: 'Company',
  Tax: 'Tax'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
