
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: number
  username: string
  password: number
  name: string | null
  phone: string | null
  isAdmin: boolean
  isCashier: boolean
  isWaiter: boolean
  isKitchenUser: boolean
}

/**
 * Model Product
 * 
 */
export type Product = {
  id: number
  name: string
  secondaryLanguageName: string | null
  arabic: string
  price: number
  cost: number
  image: string
  inStock: boolean
  hasVariant: boolean
  hasModifiers: boolean
  createdAt: Date
  updatedAt: Date
  isArchived: boolean
  collectionId: number
  categoryId: number
}

/**
 * Model Category
 * 
 */
export type Category = {
  id: number
  name: string
  color: string
  kitchenId: number
  isAvailableAllDay: boolean
  startTime: string
  endTime: string
}

/**
 * Model Collection
 * 
 */
export type Collection = {
  id: number
  name: string
}

/**
 * Model Kitchen
 * 
 */
export type Kitchen = {
  id: number
  name: string
  printer: string
}

/**
 * Model Variant
 * 
 */
export type Variant = {
  id: number
  name: string
  price: number
  productId: number
}

/**
 * Model Modifier
 * 
 */
export type Modifier = {
  id: number
  name: string
  price: number
  productId: number
}

/**
 * Model Order
 * 
 */
export type Order = {
  id: number
  orderNumber: number
  paymentStatus: string
  orderStatus: string
  createdAt: Date
  updatedAt: Date
  userId: number
}

/**
 * Model OrderItem
 * 
 */
export type OrderItem = {
  id: number
  name: string
  kotNumber: number
  orderId: number
  userId: number | null
}

/**
 * Model Company
 * 
 */
export type Company = {
  id: number
  name: string
  arabic: string
  logoUrl: string
  lastOrderNumber: number
  caption: string
  footer: string
  currencyCode: string
  address: string
  lat: string | null
  long: string | null
}

/**
 * Model Tax
 * 
 */
export type Tax = {
  id: number
  name: string
  printName: string
  isPercentage: boolean
  value: number
  companyId: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<GlobalReject>;

  /**
   * `prisma.kitchen`: Exposes CRUD operations for the **Kitchen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kitchens
    * const kitchens = await prisma.kitchen.findMany()
    * ```
    */
  get kitchen(): Prisma.KitchenDelegate<GlobalReject>;

  /**
   * `prisma.variant`: Exposes CRUD operations for the **Variant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variant.findMany()
    * ```
    */
  get variant(): Prisma.VariantDelegate<GlobalReject>;

  /**
   * `prisma.modifier`: Exposes CRUD operations for the **Modifier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modifiers
    * const modifiers = await prisma.modifier.findMany()
    * ```
    */
  get modifier(): Prisma.ModifierDelegate<GlobalReject>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<GlobalReject>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<GlobalReject>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<GlobalReject>;

  /**
   * `prisma.tax`: Exposes CRUD operations for the **Tax** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taxes
    * const taxes = await prisma.tax.findMany()
    * ```
    */
  get tax(): Prisma.TaxDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    orders: number
    OrderItem: number
  }

  export type UserCountOutputTypeSelect = {
    orders?: boolean
    OrderItem?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    Variant: number
    Modifier: number
  }

  export type ProductCountOutputTypeSelect = {
    Variant?: boolean
    Modifier?: boolean
  }

  export type ProductCountOutputTypeGetPayload<S extends boolean | null | undefined | ProductCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProductCountOutputTypeArgs)
    ? ProductCountOutputType 
    : S extends { select: any } & (ProductCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProductCountOutputType ? ProductCountOutputType[P] : never
  } 
      : ProductCountOutputType




  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect = {
    products?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | CategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CategoryCountOutputTypeArgs)
    ? CategoryCountOutputType 
    : S extends { select: any } & (CategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CategoryCountOutputType ? CategoryCountOutputType[P] : never
  } 
      : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type CollectionCountOutputType
   */


  export type CollectionCountOutputType = {
    products: number
  }

  export type CollectionCountOutputTypeSelect = {
    products?: boolean
  }

  export type CollectionCountOutputTypeGetPayload<S extends boolean | null | undefined | CollectionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CollectionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CollectionCountOutputTypeArgs)
    ? CollectionCountOutputType 
    : S extends { select: any } & (CollectionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CollectionCountOutputType ? CollectionCountOutputType[P] : never
  } 
      : CollectionCountOutputType




  // Custom InputTypes

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect | null
  }



  /**
   * Count Type KitchenCountOutputType
   */


  export type KitchenCountOutputType = {
    Category: number
  }

  export type KitchenCountOutputTypeSelect = {
    Category?: boolean
  }

  export type KitchenCountOutputTypeGetPayload<S extends boolean | null | undefined | KitchenCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? KitchenCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (KitchenCountOutputTypeArgs)
    ? KitchenCountOutputType 
    : S extends { select: any } & (KitchenCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof KitchenCountOutputType ? KitchenCountOutputType[P] : never
  } 
      : KitchenCountOutputType




  // Custom InputTypes

  /**
   * KitchenCountOutputType without action
   */
  export type KitchenCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the KitchenCountOutputType
     */
    select?: KitchenCountOutputTypeSelect | null
  }



  /**
   * Count Type OrderCountOutputType
   */


  export type OrderCountOutputType = {
    OrderItem: number
  }

  export type OrderCountOutputTypeSelect = {
    OrderItem?: boolean
  }

  export type OrderCountOutputTypeGetPayload<S extends boolean | null | undefined | OrderCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrderCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrderCountOutputTypeArgs)
    ? OrderCountOutputType 
    : S extends { select: any } & (OrderCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrderCountOutputType ? OrderCountOutputType[P] : never
  } 
      : OrderCountOutputType




  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect | null
  }



  /**
   * Count Type CompanyCountOutputType
   */


  export type CompanyCountOutputType = {
    taxes: number
  }

  export type CompanyCountOutputTypeSelect = {
    taxes?: boolean
  }

  export type CompanyCountOutputTypeGetPayload<S extends boolean | null | undefined | CompanyCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CompanyCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CompanyCountOutputTypeArgs)
    ? CompanyCountOutputType 
    : S extends { select: any } & (CompanyCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CompanyCountOutputType ? CompanyCountOutputType[P] : never
  } 
      : CompanyCountOutputType




  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    password: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    password: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: number | null
    name: string | null
    phone: string | null
    isAdmin: boolean | null
    isCashier: boolean | null
    isWaiter: boolean | null
    isKitchenUser: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: number | null
    name: string | null
    phone: string | null
    isAdmin: boolean | null
    isCashier: boolean | null
    isWaiter: boolean | null
    isKitchenUser: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    phone: number
    isAdmin: number
    isCashier: number
    isWaiter: number
    isKitchenUser: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    password?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    password?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    phone?: true
    isAdmin?: true
    isCashier?: true
    isWaiter?: true
    isKitchenUser?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    phone?: true
    isAdmin?: true
    isCashier?: true
    isWaiter?: true
    isKitchenUser?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    phone?: true
    isAdmin?: true
    isCashier?: true
    isWaiter?: true
    isKitchenUser?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    username: string
    password: number
    name: string | null
    phone: string | null
    isAdmin: boolean
    isCashier: boolean
    isWaiter: boolean
    isKitchenUser: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    isAdmin?: boolean
    isCashier?: boolean
    isWaiter?: boolean
    isKitchenUser?: boolean
    orders?: boolean | User$ordersArgs
    OrderItem?: boolean | User$OrderItemArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    orders?: boolean | User$ordersArgs
    OrderItem?: boolean | User$OrderItemArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'orders' ? Array < OrderGetPayload<S['include'][P]>>  :
        P extends 'OrderItem' ? Array < OrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'orders' ? Array < OrderGetPayload<S['select'][P]>>  :
        P extends 'OrderItem' ? Array < OrderItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    orders<T extends User$ordersArgs= {}>(args?: Subset<T, User$ordersArgs>): Prisma.PrismaPromise<Array<OrderGetPayload<T>>| Null>;

    OrderItem<T extends User$OrderItemArgs= {}>(args?: Subset<T, User$OrderItemArgs>): Prisma.PrismaPromise<Array<OrderItemGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.orders
   */
  export type User$ordersArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * User.OrderItem
   */
  export type User$OrderItemArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    cost: number | null
    collectionId: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    cost: number | null
    collectionId: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    secondaryLanguageName: string | null
    arabic: string | null
    price: number | null
    cost: number | null
    image: string | null
    inStock: boolean | null
    hasVariant: boolean | null
    hasModifiers: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    isArchived: boolean | null
    collectionId: number | null
    categoryId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    secondaryLanguageName: string | null
    arabic: string | null
    price: number | null
    cost: number | null
    image: string | null
    inStock: boolean | null
    hasVariant: boolean | null
    hasModifiers: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    isArchived: boolean | null
    collectionId: number | null
    categoryId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    secondaryLanguageName: number
    arabic: number
    price: number
    cost: number
    image: number
    inStock: number
    hasVariant: number
    hasModifiers: number
    createdAt: number
    updatedAt: number
    isArchived: number
    collectionId: number
    categoryId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    cost?: true
    collectionId?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    cost?: true
    collectionId?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    secondaryLanguageName?: true
    arabic?: true
    price?: true
    cost?: true
    image?: true
    inStock?: true
    hasVariant?: true
    hasModifiers?: true
    createdAt?: true
    updatedAt?: true
    isArchived?: true
    collectionId?: true
    categoryId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    secondaryLanguageName?: true
    arabic?: true
    price?: true
    cost?: true
    image?: true
    inStock?: true
    hasVariant?: true
    hasModifiers?: true
    createdAt?: true
    updatedAt?: true
    isArchived?: true
    collectionId?: true
    categoryId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    secondaryLanguageName?: true
    arabic?: true
    price?: true
    cost?: true
    image?: true
    inStock?: true
    hasVariant?: true
    hasModifiers?: true
    createdAt?: true
    updatedAt?: true
    isArchived?: true
    collectionId?: true
    categoryId?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: ProductScalarFieldEnum[]
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: number
    name: string
    secondaryLanguageName: string | null
    arabic: string
    price: number
    cost: number
    image: string
    inStock: boolean
    hasVariant: boolean
    hasModifiers: boolean
    createdAt: Date
    updatedAt: Date
    isArchived: boolean
    collectionId: number
    categoryId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect = {
    id?: boolean
    name?: boolean
    secondaryLanguageName?: boolean
    arabic?: boolean
    price?: boolean
    cost?: boolean
    image?: boolean
    inStock?: boolean
    hasVariant?: boolean
    hasModifiers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isArchived?: boolean
    collectionId?: boolean
    categoryId?: boolean
    collection?: boolean | CollectionArgs
    category?: boolean | CategoryArgs
    Variant?: boolean | Product$VariantArgs
    Modifier?: boolean | Product$ModifierArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }


  export type ProductInclude = {
    collection?: boolean | CollectionArgs
    category?: boolean | CategoryArgs
    Variant?: boolean | Product$VariantArgs
    Modifier?: boolean | Product$ModifierArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductGetPayload<S extends boolean | null | undefined | ProductArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Product :
    S extends undefined ? never :
    S extends { include: any } & (ProductArgs | ProductFindManyArgs)
    ? Product  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'collection' ? CollectionGetPayload<S['include'][P]> :
        P extends 'category' ? CategoryGetPayload<S['include'][P]> :
        P extends 'Variant' ? Array < VariantGetPayload<S['include'][P]>>  :
        P extends 'Modifier' ? Array < ModifierGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductArgs | ProductFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'collection' ? CollectionGetPayload<S['select'][P]> :
        P extends 'category' ? CategoryGetPayload<S['select'][P]> :
        P extends 'Variant' ? Array < VariantGetPayload<S['select'][P]>>  :
        P extends 'Modifier' ? Array < ModifierGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Product ? Product[P] : never
  } 
      : Product


  type ProductCountArgs = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProductGetPayload<T>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    collection<T extends CollectionArgs= {}>(args?: Subset<T, CollectionArgs>): Prisma__CollectionClient<CollectionGetPayload<T> | Null>;

    category<T extends CategoryArgs= {}>(args?: Subset<T, CategoryArgs>): Prisma__CategoryClient<CategoryGetPayload<T> | Null>;

    Variant<T extends Product$VariantArgs= {}>(args?: Subset<T, Product$VariantArgs>): Prisma.PrismaPromise<Array<VariantGetPayload<T>>| Null>;

    Modifier<T extends Product$ModifierArgs= {}>(args?: Subset<T, Product$ModifierArgs>): Prisma.PrismaPromise<Array<ModifierGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUnique
   */
  export interface ProductFindUniqueArgs extends ProductFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product findFirst
   */
  export interface ProductFindFirstArgs extends ProductFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.Variant
   */
  export type Product$VariantArgs = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude | null
    where?: VariantWhereInput
    orderBy?: Enumerable<VariantOrderByWithRelationInput>
    cursor?: VariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VariantScalarFieldEnum>
  }


  /**
   * Product.Modifier
   */
  export type Product$ModifierArgs = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierInclude | null
    where?: ModifierWhereInput
    orderBy?: Enumerable<ModifierOrderByWithRelationInput>
    cursor?: ModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierScalarFieldEnum>
  }


  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    kitchenId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    kitchenId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    kitchenId: number | null
    isAvailableAllDay: boolean | null
    startTime: string | null
    endTime: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    kitchenId: number | null
    isAvailableAllDay: boolean | null
    startTime: string | null
    endTime: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    color: number
    kitchenId: number
    isAvailableAllDay: number
    startTime: number
    endTime: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    kitchenId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    kitchenId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    kitchenId?: true
    isAvailableAllDay?: true
    startTime?: true
    endTime?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    kitchenId?: true
    isAvailableAllDay?: true
    startTime?: true
    endTime?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    kitchenId?: true
    isAvailableAllDay?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: CategoryScalarFieldEnum[]
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: number
    name: string
    color: string
    kitchenId: number
    isAvailableAllDay: boolean
    startTime: string
    endTime: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect = {
    id?: boolean
    name?: boolean
    color?: boolean
    kitchenId?: boolean
    isAvailableAllDay?: boolean
    startTime?: boolean
    endTime?: boolean
    kitchen?: boolean | KitchenArgs
    products?: boolean | Category$productsArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type CategoryInclude = {
    kitchen?: boolean | KitchenArgs
    products?: boolean | Category$productsArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? Category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'kitchen' ? KitchenGetPayload<S['include'][P]> :
        P extends 'products' ? Array < ProductGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'kitchen' ? KitchenGetPayload<S['select'][P]> :
        P extends 'products' ? Array < ProductGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Category ? Category[P] : never
  } 
      : Category


  type CategoryCountArgs = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<CategoryGetPayload<T>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    kitchen<T extends KitchenArgs= {}>(args?: Subset<T, KitchenArgs>): Prisma__KitchenClient<KitchenGetPayload<T> | Null>;

    products<T extends Category$productsArgs= {}>(args?: Subset<T, Category$productsArgs>): Prisma.PrismaPromise<Array<ProductGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
   */
  export interface CategoryFindUniqueArgs extends CategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
   */
  export interface CategoryFindFirstArgs extends CategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.products
   */
  export type Category$productsArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
  }



  /**
   * Model Collection
   */


  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionAvgAggregateOutputType = {
    id: number | null
  }

  export type CollectionSumAggregateOutputType = {
    id: number | null
  }

  export type CollectionMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CollectionAvgAggregateInputType = {
    id?: true
  }

  export type CollectionSumAggregateInputType = {
    id?: true
  }

  export type CollectionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CollectionAggregateArgs = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: Enumerable<CollectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs = {
    where?: CollectionWhereInput
    orderBy?: Enumerable<CollectionOrderByWithAggregationInput>
    by: CollectionScalarFieldEnum[]
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _avg?: CollectionAvgAggregateInputType
    _sum?: CollectionSumAggregateInputType
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }


  export type CollectionGroupByOutputType = {
    id: number
    name: string
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect = {
    id?: boolean
    name?: boolean
    products?: boolean | Collection$productsArgs
    _count?: boolean | CollectionCountOutputTypeArgs
  }


  export type CollectionInclude = {
    products?: boolean | Collection$productsArgs
    _count?: boolean | CollectionCountOutputTypeArgs
  }

  export type CollectionGetPayload<S extends boolean | null | undefined | CollectionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Collection :
    S extends undefined ? never :
    S extends { include: any } & (CollectionArgs | CollectionFindManyArgs)
    ? Collection  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'products' ? Array < ProductGetPayload<S['include'][P]>>  :
        P extends '_count' ? CollectionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CollectionArgs | CollectionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'products' ? Array < ProductGetPayload<S['select'][P]>>  :
        P extends '_count' ? CollectionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Collection ? Collection[P] : never
  } 
      : Collection


  type CollectionCountArgs = 
    Omit<CollectionFindManyArgs, 'select' | 'include'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CollectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CollectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Collection'> extends True ? Prisma__CollectionClient<CollectionGetPayload<T>> : Prisma__CollectionClient<CollectionGetPayload<T> | null, null>

    /**
     * Find one Collection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CollectionFindUniqueOrThrowArgs>
    ): Prisma__CollectionClient<CollectionGetPayload<T>>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CollectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CollectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Collection'> extends True ? Prisma__CollectionClient<CollectionGetPayload<T>> : Prisma__CollectionClient<CollectionGetPayload<T> | null, null>

    /**
     * Find the first Collection that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CollectionFindFirstOrThrowArgs>
    ): Prisma__CollectionClient<CollectionGetPayload<T>>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CollectionFindManyArgs>(
      args?: SelectSubset<T, CollectionFindManyArgs>
    ): Prisma.PrismaPromise<Array<CollectionGetPayload<T>>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
    **/
    create<T extends CollectionCreateArgs>(
      args: SelectSubset<T, CollectionCreateArgs>
    ): Prisma__CollectionClient<CollectionGetPayload<T>>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
    **/
    delete<T extends CollectionDeleteArgs>(
      args: SelectSubset<T, CollectionDeleteArgs>
    ): Prisma__CollectionClient<CollectionGetPayload<T>>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CollectionUpdateArgs>(
      args: SelectSubset<T, CollectionUpdateArgs>
    ): Prisma__CollectionClient<CollectionGetPayload<T>>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CollectionDeleteManyArgs>(
      args?: SelectSubset<T, CollectionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CollectionUpdateManyArgs>(
      args: SelectSubset<T, CollectionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
    **/
    upsert<T extends CollectionUpsertArgs>(
      args: SelectSubset<T, CollectionUpsertArgs>
    ): Prisma__CollectionClient<CollectionGetPayload<T>>

    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CollectionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    products<T extends Collection$productsArgs= {}>(args?: Subset<T, Collection$productsArgs>): Prisma.PrismaPromise<Array<ProductGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Collection base type for findUnique actions
   */
  export type CollectionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUnique
   */
  export interface CollectionFindUniqueArgs extends CollectionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection base type for findFirst actions
   */
  export type CollectionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: Enumerable<CollectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: Enumerable<CollectionScalarFieldEnum>
  }

  /**
   * Collection findFirst
   */
  export interface CollectionFindFirstArgs extends CollectionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: Enumerable<CollectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: Enumerable<CollectionScalarFieldEnum>
  }


  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: Enumerable<CollectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: Enumerable<CollectionScalarFieldEnum>
  }


  /**
   * Collection create
   */
  export type CollectionCreateArgs = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }


  /**
   * Collection update
   */
  export type CollectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
  }


  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }


  /**
   * Collection delete
   */
  export type CollectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
  }


  /**
   * Collection.products
   */
  export type Collection$productsArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Collection without action
   */
  export type CollectionArgs = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude | null
  }



  /**
   * Model Kitchen
   */


  export type AggregateKitchen = {
    _count: KitchenCountAggregateOutputType | null
    _avg: KitchenAvgAggregateOutputType | null
    _sum: KitchenSumAggregateOutputType | null
    _min: KitchenMinAggregateOutputType | null
    _max: KitchenMaxAggregateOutputType | null
  }

  export type KitchenAvgAggregateOutputType = {
    id: number | null
  }

  export type KitchenSumAggregateOutputType = {
    id: number | null
  }

  export type KitchenMinAggregateOutputType = {
    id: number | null
    name: string | null
    printer: string | null
  }

  export type KitchenMaxAggregateOutputType = {
    id: number | null
    name: string | null
    printer: string | null
  }

  export type KitchenCountAggregateOutputType = {
    id: number
    name: number
    printer: number
    _all: number
  }


  export type KitchenAvgAggregateInputType = {
    id?: true
  }

  export type KitchenSumAggregateInputType = {
    id?: true
  }

  export type KitchenMinAggregateInputType = {
    id?: true
    name?: true
    printer?: true
  }

  export type KitchenMaxAggregateInputType = {
    id?: true
    name?: true
    printer?: true
  }

  export type KitchenCountAggregateInputType = {
    id?: true
    name?: true
    printer?: true
    _all?: true
  }

  export type KitchenAggregateArgs = {
    /**
     * Filter which Kitchen to aggregate.
     */
    where?: KitchenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kitchens to fetch.
     */
    orderBy?: Enumerable<KitchenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KitchenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kitchens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kitchens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kitchens
    **/
    _count?: true | KitchenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KitchenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KitchenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KitchenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KitchenMaxAggregateInputType
  }

  export type GetKitchenAggregateType<T extends KitchenAggregateArgs> = {
        [P in keyof T & keyof AggregateKitchen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKitchen[P]>
      : GetScalarType<T[P], AggregateKitchen[P]>
  }




  export type KitchenGroupByArgs = {
    where?: KitchenWhereInput
    orderBy?: Enumerable<KitchenOrderByWithAggregationInput>
    by: KitchenScalarFieldEnum[]
    having?: KitchenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KitchenCountAggregateInputType | true
    _avg?: KitchenAvgAggregateInputType
    _sum?: KitchenSumAggregateInputType
    _min?: KitchenMinAggregateInputType
    _max?: KitchenMaxAggregateInputType
  }


  export type KitchenGroupByOutputType = {
    id: number
    name: string
    printer: string
    _count: KitchenCountAggregateOutputType | null
    _avg: KitchenAvgAggregateOutputType | null
    _sum: KitchenSumAggregateOutputType | null
    _min: KitchenMinAggregateOutputType | null
    _max: KitchenMaxAggregateOutputType | null
  }

  type GetKitchenGroupByPayload<T extends KitchenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<KitchenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KitchenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KitchenGroupByOutputType[P]>
            : GetScalarType<T[P], KitchenGroupByOutputType[P]>
        }
      >
    >


  export type KitchenSelect = {
    id?: boolean
    name?: boolean
    printer?: boolean
    Category?: boolean | Kitchen$CategoryArgs
    _count?: boolean | KitchenCountOutputTypeArgs
  }


  export type KitchenInclude = {
    Category?: boolean | Kitchen$CategoryArgs
    _count?: boolean | KitchenCountOutputTypeArgs
  }

  export type KitchenGetPayload<S extends boolean | null | undefined | KitchenArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Kitchen :
    S extends undefined ? never :
    S extends { include: any } & (KitchenArgs | KitchenFindManyArgs)
    ? Kitchen  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Category' ? Array < CategoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? KitchenCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (KitchenArgs | KitchenFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Category' ? Array < CategoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? KitchenCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Kitchen ? Kitchen[P] : never
  } 
      : Kitchen


  type KitchenCountArgs = 
    Omit<KitchenFindManyArgs, 'select' | 'include'> & {
      select?: KitchenCountAggregateInputType | true
    }

  export interface KitchenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Kitchen that matches the filter.
     * @param {KitchenFindUniqueArgs} args - Arguments to find a Kitchen
     * @example
     * // Get one Kitchen
     * const kitchen = await prisma.kitchen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KitchenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, KitchenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Kitchen'> extends True ? Prisma__KitchenClient<KitchenGetPayload<T>> : Prisma__KitchenClient<KitchenGetPayload<T> | null, null>

    /**
     * Find one Kitchen that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KitchenFindUniqueOrThrowArgs} args - Arguments to find a Kitchen
     * @example
     * // Get one Kitchen
     * const kitchen = await prisma.kitchen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KitchenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, KitchenFindUniqueOrThrowArgs>
    ): Prisma__KitchenClient<KitchenGetPayload<T>>

    /**
     * Find the first Kitchen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenFindFirstArgs} args - Arguments to find a Kitchen
     * @example
     * // Get one Kitchen
     * const kitchen = await prisma.kitchen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KitchenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, KitchenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Kitchen'> extends True ? Prisma__KitchenClient<KitchenGetPayload<T>> : Prisma__KitchenClient<KitchenGetPayload<T> | null, null>

    /**
     * Find the first Kitchen that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenFindFirstOrThrowArgs} args - Arguments to find a Kitchen
     * @example
     * // Get one Kitchen
     * const kitchen = await prisma.kitchen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KitchenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, KitchenFindFirstOrThrowArgs>
    ): Prisma__KitchenClient<KitchenGetPayload<T>>

    /**
     * Find zero or more Kitchens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kitchens
     * const kitchens = await prisma.kitchen.findMany()
     * 
     * // Get first 10 Kitchens
     * const kitchens = await prisma.kitchen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kitchenWithIdOnly = await prisma.kitchen.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KitchenFindManyArgs>(
      args?: SelectSubset<T, KitchenFindManyArgs>
    ): Prisma.PrismaPromise<Array<KitchenGetPayload<T>>>

    /**
     * Create a Kitchen.
     * @param {KitchenCreateArgs} args - Arguments to create a Kitchen.
     * @example
     * // Create one Kitchen
     * const Kitchen = await prisma.kitchen.create({
     *   data: {
     *     // ... data to create a Kitchen
     *   }
     * })
     * 
    **/
    create<T extends KitchenCreateArgs>(
      args: SelectSubset<T, KitchenCreateArgs>
    ): Prisma__KitchenClient<KitchenGetPayload<T>>

    /**
     * Delete a Kitchen.
     * @param {KitchenDeleteArgs} args - Arguments to delete one Kitchen.
     * @example
     * // Delete one Kitchen
     * const Kitchen = await prisma.kitchen.delete({
     *   where: {
     *     // ... filter to delete one Kitchen
     *   }
     * })
     * 
    **/
    delete<T extends KitchenDeleteArgs>(
      args: SelectSubset<T, KitchenDeleteArgs>
    ): Prisma__KitchenClient<KitchenGetPayload<T>>

    /**
     * Update one Kitchen.
     * @param {KitchenUpdateArgs} args - Arguments to update one Kitchen.
     * @example
     * // Update one Kitchen
     * const kitchen = await prisma.kitchen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KitchenUpdateArgs>(
      args: SelectSubset<T, KitchenUpdateArgs>
    ): Prisma__KitchenClient<KitchenGetPayload<T>>

    /**
     * Delete zero or more Kitchens.
     * @param {KitchenDeleteManyArgs} args - Arguments to filter Kitchens to delete.
     * @example
     * // Delete a few Kitchens
     * const { count } = await prisma.kitchen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KitchenDeleteManyArgs>(
      args?: SelectSubset<T, KitchenDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kitchens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kitchens
     * const kitchen = await prisma.kitchen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KitchenUpdateManyArgs>(
      args: SelectSubset<T, KitchenUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kitchen.
     * @param {KitchenUpsertArgs} args - Arguments to update or create a Kitchen.
     * @example
     * // Update or create a Kitchen
     * const kitchen = await prisma.kitchen.upsert({
     *   create: {
     *     // ... data to create a Kitchen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kitchen we want to update
     *   }
     * })
    **/
    upsert<T extends KitchenUpsertArgs>(
      args: SelectSubset<T, KitchenUpsertArgs>
    ): Prisma__KitchenClient<KitchenGetPayload<T>>

    /**
     * Count the number of Kitchens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenCountArgs} args - Arguments to filter Kitchens to count.
     * @example
     * // Count the number of Kitchens
     * const count = await prisma.kitchen.count({
     *   where: {
     *     // ... the filter for the Kitchens we want to count
     *   }
     * })
    **/
    count<T extends KitchenCountArgs>(
      args?: Subset<T, KitchenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KitchenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kitchen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KitchenAggregateArgs>(args: Subset<T, KitchenAggregateArgs>): Prisma.PrismaPromise<GetKitchenAggregateType<T>>

    /**
     * Group by Kitchen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KitchenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KitchenGroupByArgs['orderBy'] }
        : { orderBy?: KitchenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KitchenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKitchenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Kitchen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__KitchenClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Category<T extends Kitchen$CategoryArgs= {}>(args?: Subset<T, Kitchen$CategoryArgs>): Prisma.PrismaPromise<Array<CategoryGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Kitchen base type for findUnique actions
   */
  export type KitchenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KitchenInclude | null
    /**
     * Filter, which Kitchen to fetch.
     */
    where: KitchenWhereUniqueInput
  }

  /**
   * Kitchen findUnique
   */
  export interface KitchenFindUniqueArgs extends KitchenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Kitchen findUniqueOrThrow
   */
  export type KitchenFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KitchenInclude | null
    /**
     * Filter, which Kitchen to fetch.
     */
    where: KitchenWhereUniqueInput
  }


  /**
   * Kitchen base type for findFirst actions
   */
  export type KitchenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KitchenInclude | null
    /**
     * Filter, which Kitchen to fetch.
     */
    where?: KitchenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kitchens to fetch.
     */
    orderBy?: Enumerable<KitchenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kitchens.
     */
    cursor?: KitchenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kitchens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kitchens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kitchens.
     */
    distinct?: Enumerable<KitchenScalarFieldEnum>
  }

  /**
   * Kitchen findFirst
   */
  export interface KitchenFindFirstArgs extends KitchenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Kitchen findFirstOrThrow
   */
  export type KitchenFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KitchenInclude | null
    /**
     * Filter, which Kitchen to fetch.
     */
    where?: KitchenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kitchens to fetch.
     */
    orderBy?: Enumerable<KitchenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kitchens.
     */
    cursor?: KitchenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kitchens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kitchens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kitchens.
     */
    distinct?: Enumerable<KitchenScalarFieldEnum>
  }


  /**
   * Kitchen findMany
   */
  export type KitchenFindManyArgs = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KitchenInclude | null
    /**
     * Filter, which Kitchens to fetch.
     */
    where?: KitchenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kitchens to fetch.
     */
    orderBy?: Enumerable<KitchenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kitchens.
     */
    cursor?: KitchenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kitchens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kitchens.
     */
    skip?: number
    distinct?: Enumerable<KitchenScalarFieldEnum>
  }


  /**
   * Kitchen create
   */
  export type KitchenCreateArgs = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KitchenInclude | null
    /**
     * The data needed to create a Kitchen.
     */
    data: XOR<KitchenCreateInput, KitchenUncheckedCreateInput>
  }


  /**
   * Kitchen update
   */
  export type KitchenUpdateArgs = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KitchenInclude | null
    /**
     * The data needed to update a Kitchen.
     */
    data: XOR<KitchenUpdateInput, KitchenUncheckedUpdateInput>
    /**
     * Choose, which Kitchen to update.
     */
    where: KitchenWhereUniqueInput
  }


  /**
   * Kitchen updateMany
   */
  export type KitchenUpdateManyArgs = {
    /**
     * The data used to update Kitchens.
     */
    data: XOR<KitchenUpdateManyMutationInput, KitchenUncheckedUpdateManyInput>
    /**
     * Filter which Kitchens to update
     */
    where?: KitchenWhereInput
  }


  /**
   * Kitchen upsert
   */
  export type KitchenUpsertArgs = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KitchenInclude | null
    /**
     * The filter to search for the Kitchen to update in case it exists.
     */
    where: KitchenWhereUniqueInput
    /**
     * In case the Kitchen found by the `where` argument doesn't exist, create a new Kitchen with this data.
     */
    create: XOR<KitchenCreateInput, KitchenUncheckedCreateInput>
    /**
     * In case the Kitchen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KitchenUpdateInput, KitchenUncheckedUpdateInput>
  }


  /**
   * Kitchen delete
   */
  export type KitchenDeleteArgs = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KitchenInclude | null
    /**
     * Filter which Kitchen to delete.
     */
    where: KitchenWhereUniqueInput
  }


  /**
   * Kitchen deleteMany
   */
  export type KitchenDeleteManyArgs = {
    /**
     * Filter which Kitchens to delete
     */
    where?: KitchenWhereInput
  }


  /**
   * Kitchen.Category
   */
  export type Kitchen$CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Kitchen without action
   */
  export type KitchenArgs = {
    /**
     * Select specific fields to fetch from the Kitchen
     */
    select?: KitchenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KitchenInclude | null
  }



  /**
   * Model Variant
   */


  export type AggregateVariant = {
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  export type VariantAvgAggregateOutputType = {
    id: number | null
    price: number | null
    productId: number | null
  }

  export type VariantSumAggregateOutputType = {
    id: number | null
    price: number | null
    productId: number | null
  }

  export type VariantMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    productId: number | null
  }

  export type VariantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    productId: number | null
  }

  export type VariantCountAggregateOutputType = {
    id: number
    name: number
    price: number
    productId: number
    _all: number
  }


  export type VariantAvgAggregateInputType = {
    id?: true
    price?: true
    productId?: true
  }

  export type VariantSumAggregateInputType = {
    id?: true
    price?: true
    productId?: true
  }

  export type VariantMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    productId?: true
  }

  export type VariantMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    productId?: true
  }

  export type VariantCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    productId?: true
    _all?: true
  }

  export type VariantAggregateArgs = {
    /**
     * Filter which Variant to aggregate.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: Enumerable<VariantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variants
    **/
    _count?: true | VariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantMaxAggregateInputType
  }

  export type GetVariantAggregateType<T extends VariantAggregateArgs> = {
        [P in keyof T & keyof AggregateVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariant[P]>
      : GetScalarType<T[P], AggregateVariant[P]>
  }




  export type VariantGroupByArgs = {
    where?: VariantWhereInput
    orderBy?: Enumerable<VariantOrderByWithAggregationInput>
    by: VariantScalarFieldEnum[]
    having?: VariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantCountAggregateInputType | true
    _avg?: VariantAvgAggregateInputType
    _sum?: VariantSumAggregateInputType
    _min?: VariantMinAggregateInputType
    _max?: VariantMaxAggregateInputType
  }


  export type VariantGroupByOutputType = {
    id: number
    name: string
    price: number
    productId: number
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  type GetVariantGroupByPayload<T extends VariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantGroupByOutputType[P]>
            : GetScalarType<T[P], VariantGroupByOutputType[P]>
        }
      >
    >


  export type VariantSelect = {
    id?: boolean
    name?: boolean
    price?: boolean
    productId?: boolean
    product?: boolean | ProductArgs
  }


  export type VariantInclude = {
    product?: boolean | ProductArgs
  }

  export type VariantGetPayload<S extends boolean | null | undefined | VariantArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Variant :
    S extends undefined ? never :
    S extends { include: any } & (VariantArgs | VariantFindManyArgs)
    ? Variant  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VariantArgs | VariantFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof Variant ? Variant[P] : never
  } 
      : Variant


  type VariantCountArgs = 
    Omit<VariantFindManyArgs, 'select' | 'include'> & {
      select?: VariantCountAggregateInputType | true
    }

  export interface VariantDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Variant that matches the filter.
     * @param {VariantFindUniqueArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VariantFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VariantFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Variant'> extends True ? Prisma__VariantClient<VariantGetPayload<T>> : Prisma__VariantClient<VariantGetPayload<T> | null, null>

    /**
     * Find one Variant that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VariantFindUniqueOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VariantFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VariantFindUniqueOrThrowArgs>
    ): Prisma__VariantClient<VariantGetPayload<T>>

    /**
     * Find the first Variant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VariantFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VariantFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Variant'> extends True ? Prisma__VariantClient<VariantGetPayload<T>> : Prisma__VariantClient<VariantGetPayload<T> | null, null>

    /**
     * Find the first Variant that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VariantFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VariantFindFirstOrThrowArgs>
    ): Prisma__VariantClient<VariantGetPayload<T>>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variant.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantWithIdOnly = await prisma.variant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VariantFindManyArgs>(
      args?: SelectSubset<T, VariantFindManyArgs>
    ): Prisma.PrismaPromise<Array<VariantGetPayload<T>>>

    /**
     * Create a Variant.
     * @param {VariantCreateArgs} args - Arguments to create a Variant.
     * @example
     * // Create one Variant
     * const Variant = await prisma.variant.create({
     *   data: {
     *     // ... data to create a Variant
     *   }
     * })
     * 
    **/
    create<T extends VariantCreateArgs>(
      args: SelectSubset<T, VariantCreateArgs>
    ): Prisma__VariantClient<VariantGetPayload<T>>

    /**
     * Delete a Variant.
     * @param {VariantDeleteArgs} args - Arguments to delete one Variant.
     * @example
     * // Delete one Variant
     * const Variant = await prisma.variant.delete({
     *   where: {
     *     // ... filter to delete one Variant
     *   }
     * })
     * 
    **/
    delete<T extends VariantDeleteArgs>(
      args: SelectSubset<T, VariantDeleteArgs>
    ): Prisma__VariantClient<VariantGetPayload<T>>

    /**
     * Update one Variant.
     * @param {VariantUpdateArgs} args - Arguments to update one Variant.
     * @example
     * // Update one Variant
     * const variant = await prisma.variant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VariantUpdateArgs>(
      args: SelectSubset<T, VariantUpdateArgs>
    ): Prisma__VariantClient<VariantGetPayload<T>>

    /**
     * Delete zero or more Variants.
     * @param {VariantDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VariantDeleteManyArgs>(
      args?: SelectSubset<T, VariantDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VariantUpdateManyArgs>(
      args: SelectSubset<T, VariantUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Variant.
     * @param {VariantUpsertArgs} args - Arguments to update or create a Variant.
     * @example
     * // Update or create a Variant
     * const variant = await prisma.variant.upsert({
     *   create: {
     *     // ... data to create a Variant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variant we want to update
     *   }
     * })
    **/
    upsert<T extends VariantUpsertArgs>(
      args: SelectSubset<T, VariantUpsertArgs>
    ): Prisma__VariantClient<VariantGetPayload<T>>

    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variant.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends VariantCountArgs>(
      args?: Subset<T, VariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantAggregateArgs>(args: Subset<T, VariantAggregateArgs>): Prisma.PrismaPromise<GetVariantAggregateType<T>>

    /**
     * Group by Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantGroupByArgs['orderBy'] }
        : { orderBy?: VariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Variant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VariantClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Variant base type for findUnique actions
   */
  export type VariantFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findUnique
   */
  export interface VariantFindUniqueArgs extends VariantFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Variant findUniqueOrThrow
   */
  export type VariantFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }


  /**
   * Variant base type for findFirst actions
   */
  export type VariantFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: Enumerable<VariantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: Enumerable<VariantScalarFieldEnum>
  }

  /**
   * Variant findFirst
   */
  export interface VariantFindFirstArgs extends VariantFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Variant findFirstOrThrow
   */
  export type VariantFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: Enumerable<VariantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: Enumerable<VariantScalarFieldEnum>
  }


  /**
   * Variant findMany
   */
  export type VariantFindManyArgs = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: Enumerable<VariantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    distinct?: Enumerable<VariantScalarFieldEnum>
  }


  /**
   * Variant create
   */
  export type VariantCreateArgs = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude | null
    /**
     * The data needed to create a Variant.
     */
    data: XOR<VariantCreateInput, VariantUncheckedCreateInput>
  }


  /**
   * Variant update
   */
  export type VariantUpdateArgs = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude | null
    /**
     * The data needed to update a Variant.
     */
    data: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
    /**
     * Choose, which Variant to update.
     */
    where: VariantWhereUniqueInput
  }


  /**
   * Variant updateMany
   */
  export type VariantUpdateManyArgs = {
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
  }


  /**
   * Variant upsert
   */
  export type VariantUpsertArgs = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude | null
    /**
     * The filter to search for the Variant to update in case it exists.
     */
    where: VariantWhereUniqueInput
    /**
     * In case the Variant found by the `where` argument doesn't exist, create a new Variant with this data.
     */
    create: XOR<VariantCreateInput, VariantUncheckedCreateInput>
    /**
     * In case the Variant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
  }


  /**
   * Variant delete
   */
  export type VariantDeleteArgs = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude | null
    /**
     * Filter which Variant to delete.
     */
    where: VariantWhereUniqueInput
  }


  /**
   * Variant deleteMany
   */
  export type VariantDeleteManyArgs = {
    /**
     * Filter which Variants to delete
     */
    where?: VariantWhereInput
  }


  /**
   * Variant without action
   */
  export type VariantArgs = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantInclude | null
  }



  /**
   * Model Modifier
   */


  export type AggregateModifier = {
    _count: ModifierCountAggregateOutputType | null
    _avg: ModifierAvgAggregateOutputType | null
    _sum: ModifierSumAggregateOutputType | null
    _min: ModifierMinAggregateOutputType | null
    _max: ModifierMaxAggregateOutputType | null
  }

  export type ModifierAvgAggregateOutputType = {
    id: number | null
    price: number | null
    productId: number | null
  }

  export type ModifierSumAggregateOutputType = {
    id: number | null
    price: number | null
    productId: number | null
  }

  export type ModifierMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    productId: number | null
  }

  export type ModifierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    productId: number | null
  }

  export type ModifierCountAggregateOutputType = {
    id: number
    name: number
    price: number
    productId: number
    _all: number
  }


  export type ModifierAvgAggregateInputType = {
    id?: true
    price?: true
    productId?: true
  }

  export type ModifierSumAggregateInputType = {
    id?: true
    price?: true
    productId?: true
  }

  export type ModifierMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    productId?: true
  }

  export type ModifierMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    productId?: true
  }

  export type ModifierCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    productId?: true
    _all?: true
  }

  export type ModifierAggregateArgs = {
    /**
     * Filter which Modifier to aggregate.
     */
    where?: ModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modifiers to fetch.
     */
    orderBy?: Enumerable<ModifierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modifiers
    **/
    _count?: true | ModifierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModifierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModifierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModifierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModifierMaxAggregateInputType
  }

  export type GetModifierAggregateType<T extends ModifierAggregateArgs> = {
        [P in keyof T & keyof AggregateModifier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModifier[P]>
      : GetScalarType<T[P], AggregateModifier[P]>
  }




  export type ModifierGroupByArgs = {
    where?: ModifierWhereInput
    orderBy?: Enumerable<ModifierOrderByWithAggregationInput>
    by: ModifierScalarFieldEnum[]
    having?: ModifierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModifierCountAggregateInputType | true
    _avg?: ModifierAvgAggregateInputType
    _sum?: ModifierSumAggregateInputType
    _min?: ModifierMinAggregateInputType
    _max?: ModifierMaxAggregateInputType
  }


  export type ModifierGroupByOutputType = {
    id: number
    name: string
    price: number
    productId: number
    _count: ModifierCountAggregateOutputType | null
    _avg: ModifierAvgAggregateOutputType | null
    _sum: ModifierSumAggregateOutputType | null
    _min: ModifierMinAggregateOutputType | null
    _max: ModifierMaxAggregateOutputType | null
  }

  type GetModifierGroupByPayload<T extends ModifierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ModifierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModifierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModifierGroupByOutputType[P]>
            : GetScalarType<T[P], ModifierGroupByOutputType[P]>
        }
      >
    >


  export type ModifierSelect = {
    id?: boolean
    name?: boolean
    price?: boolean
    productId?: boolean
    product?: boolean | ProductArgs
  }


  export type ModifierInclude = {
    product?: boolean | ProductArgs
  }

  export type ModifierGetPayload<S extends boolean | null | undefined | ModifierArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Modifier :
    S extends undefined ? never :
    S extends { include: any } & (ModifierArgs | ModifierFindManyArgs)
    ? Modifier  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ModifierArgs | ModifierFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof Modifier ? Modifier[P] : never
  } 
      : Modifier


  type ModifierCountArgs = 
    Omit<ModifierFindManyArgs, 'select' | 'include'> & {
      select?: ModifierCountAggregateInputType | true
    }

  export interface ModifierDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Modifier that matches the filter.
     * @param {ModifierFindUniqueArgs} args - Arguments to find a Modifier
     * @example
     * // Get one Modifier
     * const modifier = await prisma.modifier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModifierFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModifierFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Modifier'> extends True ? Prisma__ModifierClient<ModifierGetPayload<T>> : Prisma__ModifierClient<ModifierGetPayload<T> | null, null>

    /**
     * Find one Modifier that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModifierFindUniqueOrThrowArgs} args - Arguments to find a Modifier
     * @example
     * // Get one Modifier
     * const modifier = await prisma.modifier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModifierFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ModifierFindUniqueOrThrowArgs>
    ): Prisma__ModifierClient<ModifierGetPayload<T>>

    /**
     * Find the first Modifier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierFindFirstArgs} args - Arguments to find a Modifier
     * @example
     * // Get one Modifier
     * const modifier = await prisma.modifier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModifierFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModifierFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Modifier'> extends True ? Prisma__ModifierClient<ModifierGetPayload<T>> : Prisma__ModifierClient<ModifierGetPayload<T> | null, null>

    /**
     * Find the first Modifier that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierFindFirstOrThrowArgs} args - Arguments to find a Modifier
     * @example
     * // Get one Modifier
     * const modifier = await prisma.modifier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModifierFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ModifierFindFirstOrThrowArgs>
    ): Prisma__ModifierClient<ModifierGetPayload<T>>

    /**
     * Find zero or more Modifiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modifiers
     * const modifiers = await prisma.modifier.findMany()
     * 
     * // Get first 10 Modifiers
     * const modifiers = await prisma.modifier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modifierWithIdOnly = await prisma.modifier.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModifierFindManyArgs>(
      args?: SelectSubset<T, ModifierFindManyArgs>
    ): Prisma.PrismaPromise<Array<ModifierGetPayload<T>>>

    /**
     * Create a Modifier.
     * @param {ModifierCreateArgs} args - Arguments to create a Modifier.
     * @example
     * // Create one Modifier
     * const Modifier = await prisma.modifier.create({
     *   data: {
     *     // ... data to create a Modifier
     *   }
     * })
     * 
    **/
    create<T extends ModifierCreateArgs>(
      args: SelectSubset<T, ModifierCreateArgs>
    ): Prisma__ModifierClient<ModifierGetPayload<T>>

    /**
     * Delete a Modifier.
     * @param {ModifierDeleteArgs} args - Arguments to delete one Modifier.
     * @example
     * // Delete one Modifier
     * const Modifier = await prisma.modifier.delete({
     *   where: {
     *     // ... filter to delete one Modifier
     *   }
     * })
     * 
    **/
    delete<T extends ModifierDeleteArgs>(
      args: SelectSubset<T, ModifierDeleteArgs>
    ): Prisma__ModifierClient<ModifierGetPayload<T>>

    /**
     * Update one Modifier.
     * @param {ModifierUpdateArgs} args - Arguments to update one Modifier.
     * @example
     * // Update one Modifier
     * const modifier = await prisma.modifier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModifierUpdateArgs>(
      args: SelectSubset<T, ModifierUpdateArgs>
    ): Prisma__ModifierClient<ModifierGetPayload<T>>

    /**
     * Delete zero or more Modifiers.
     * @param {ModifierDeleteManyArgs} args - Arguments to filter Modifiers to delete.
     * @example
     * // Delete a few Modifiers
     * const { count } = await prisma.modifier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModifierDeleteManyArgs>(
      args?: SelectSubset<T, ModifierDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modifiers
     * const modifier = await prisma.modifier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModifierUpdateManyArgs>(
      args: SelectSubset<T, ModifierUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Modifier.
     * @param {ModifierUpsertArgs} args - Arguments to update or create a Modifier.
     * @example
     * // Update or create a Modifier
     * const modifier = await prisma.modifier.upsert({
     *   create: {
     *     // ... data to create a Modifier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modifier we want to update
     *   }
     * })
    **/
    upsert<T extends ModifierUpsertArgs>(
      args: SelectSubset<T, ModifierUpsertArgs>
    ): Prisma__ModifierClient<ModifierGetPayload<T>>

    /**
     * Count the number of Modifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierCountArgs} args - Arguments to filter Modifiers to count.
     * @example
     * // Count the number of Modifiers
     * const count = await prisma.modifier.count({
     *   where: {
     *     // ... the filter for the Modifiers we want to count
     *   }
     * })
    **/
    count<T extends ModifierCountArgs>(
      args?: Subset<T, ModifierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModifierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModifierAggregateArgs>(args: Subset<T, ModifierAggregateArgs>): Prisma.PrismaPromise<GetModifierAggregateType<T>>

    /**
     * Group by Modifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModifierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModifierGroupByArgs['orderBy'] }
        : { orderBy?: ModifierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModifierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModifierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Modifier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModifierClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Modifier base type for findUnique actions
   */
  export type ModifierFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierInclude | null
    /**
     * Filter, which Modifier to fetch.
     */
    where: ModifierWhereUniqueInput
  }

  /**
   * Modifier findUnique
   */
  export interface ModifierFindUniqueArgs extends ModifierFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Modifier findUniqueOrThrow
   */
  export type ModifierFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierInclude | null
    /**
     * Filter, which Modifier to fetch.
     */
    where: ModifierWhereUniqueInput
  }


  /**
   * Modifier base type for findFirst actions
   */
  export type ModifierFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierInclude | null
    /**
     * Filter, which Modifier to fetch.
     */
    where?: ModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modifiers to fetch.
     */
    orderBy?: Enumerable<ModifierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modifiers.
     */
    cursor?: ModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modifiers.
     */
    distinct?: Enumerable<ModifierScalarFieldEnum>
  }

  /**
   * Modifier findFirst
   */
  export interface ModifierFindFirstArgs extends ModifierFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Modifier findFirstOrThrow
   */
  export type ModifierFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierInclude | null
    /**
     * Filter, which Modifier to fetch.
     */
    where?: ModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modifiers to fetch.
     */
    orderBy?: Enumerable<ModifierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modifiers.
     */
    cursor?: ModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modifiers.
     */
    distinct?: Enumerable<ModifierScalarFieldEnum>
  }


  /**
   * Modifier findMany
   */
  export type ModifierFindManyArgs = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierInclude | null
    /**
     * Filter, which Modifiers to fetch.
     */
    where?: ModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modifiers to fetch.
     */
    orderBy?: Enumerable<ModifierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modifiers.
     */
    cursor?: ModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modifiers.
     */
    skip?: number
    distinct?: Enumerable<ModifierScalarFieldEnum>
  }


  /**
   * Modifier create
   */
  export type ModifierCreateArgs = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierInclude | null
    /**
     * The data needed to create a Modifier.
     */
    data: XOR<ModifierCreateInput, ModifierUncheckedCreateInput>
  }


  /**
   * Modifier update
   */
  export type ModifierUpdateArgs = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierInclude | null
    /**
     * The data needed to update a Modifier.
     */
    data: XOR<ModifierUpdateInput, ModifierUncheckedUpdateInput>
    /**
     * Choose, which Modifier to update.
     */
    where: ModifierWhereUniqueInput
  }


  /**
   * Modifier updateMany
   */
  export type ModifierUpdateManyArgs = {
    /**
     * The data used to update Modifiers.
     */
    data: XOR<ModifierUpdateManyMutationInput, ModifierUncheckedUpdateManyInput>
    /**
     * Filter which Modifiers to update
     */
    where?: ModifierWhereInput
  }


  /**
   * Modifier upsert
   */
  export type ModifierUpsertArgs = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierInclude | null
    /**
     * The filter to search for the Modifier to update in case it exists.
     */
    where: ModifierWhereUniqueInput
    /**
     * In case the Modifier found by the `where` argument doesn't exist, create a new Modifier with this data.
     */
    create: XOR<ModifierCreateInput, ModifierUncheckedCreateInput>
    /**
     * In case the Modifier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModifierUpdateInput, ModifierUncheckedUpdateInput>
  }


  /**
   * Modifier delete
   */
  export type ModifierDeleteArgs = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierInclude | null
    /**
     * Filter which Modifier to delete.
     */
    where: ModifierWhereUniqueInput
  }


  /**
   * Modifier deleteMany
   */
  export type ModifierDeleteManyArgs = {
    /**
     * Filter which Modifiers to delete
     */
    where?: ModifierWhereInput
  }


  /**
   * Modifier without action
   */
  export type ModifierArgs = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierInclude | null
  }



  /**
   * Model Order
   */


  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    userId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    userId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    paymentStatus: string | null
    orderStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    paymentStatus: string | null
    orderStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    paymentStatus: number
    orderStatus: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    orderNumber?: true
    userId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    orderNumber?: true
    userId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    paymentStatus?: true
    orderStatus?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    paymentStatus?: true
    orderStatus?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    paymentStatus?: true
    orderStatus?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type OrderAggregateArgs = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs = {
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithAggregationInput>
    by: OrderScalarFieldEnum[]
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }


  export type OrderGroupByOutputType = {
    id: number
    orderNumber: number
    paymentStatus: string
    orderStatus: string
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect = {
    id?: boolean
    orderNumber?: boolean
    paymentStatus?: boolean
    orderStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    OrderItem?: boolean | Order$OrderItemArgs
    createdUser?: boolean | UserArgs
    _count?: boolean | OrderCountOutputTypeArgs
  }


  export type OrderInclude = {
    OrderItem?: boolean | Order$OrderItemArgs
    createdUser?: boolean | UserArgs
    _count?: boolean | OrderCountOutputTypeArgs
  }

  export type OrderGetPayload<S extends boolean | null | undefined | OrderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Order :
    S extends undefined ? never :
    S extends { include: any } & (OrderArgs | OrderFindManyArgs)
    ? Order  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'OrderItem' ? Array < OrderItemGetPayload<S['include'][P]>>  :
        P extends 'createdUser' ? UserGetPayload<S['include'][P]> :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OrderArgs | OrderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'OrderItem' ? Array < OrderItemGetPayload<S['select'][P]>>  :
        P extends 'createdUser' ? UserGetPayload<S['select'][P]> :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Order ? Order[P] : never
  } 
      : Order


  type OrderCountArgs = 
    Omit<OrderFindManyArgs, 'select' | 'include'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Order'> extends True ? Prisma__OrderClient<OrderGetPayload<T>> : Prisma__OrderClient<OrderGetPayload<T> | null, null>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Order'> extends True ? Prisma__OrderClient<OrderGetPayload<T>> : Prisma__OrderClient<OrderGetPayload<T> | null, null>

    /**
     * Find the first Order that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs>
    ): Prisma.PrismaPromise<Array<OrderGetPayload<T>>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    OrderItem<T extends Order$OrderItemArgs= {}>(args?: Subset<T, Order$OrderItemArgs>): Prisma.PrismaPromise<Array<OrderItemGetPayload<T>>| Null>;

    createdUser<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Order base type for findUnique actions
   */
  export type OrderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUnique
   */
  export interface OrderFindUniqueArgs extends OrderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order base type for findFirst actions
   */
  export type OrderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: Enumerable<OrderScalarFieldEnum>
  }

  /**
   * Order findFirst
   */
  export interface OrderFindFirstArgs extends OrderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order create
   */
  export type OrderCreateArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.OrderItem
   */
  export type Order$OrderItemArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * Order without action
   */
  export type OrderArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
  }



  /**
   * Model OrderItem
   */


  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    kotNumber: number | null
    orderId: number | null
    userId: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    kotNumber: number | null
    orderId: number | null
    userId: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    kotNumber: number | null
    orderId: number | null
    userId: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    kotNumber: number | null
    orderId: number | null
    userId: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    name: number
    kotNumber: number
    orderId: number
    userId: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    kotNumber?: true
    orderId?: true
    userId?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    kotNumber?: true
    orderId?: true
    userId?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    name?: true
    kotNumber?: true
    orderId?: true
    userId?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    name?: true
    kotNumber?: true
    orderId?: true
    userId?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    name?: true
    kotNumber?: true
    orderId?: true
    userId?: true
    _all?: true
  }

  export type OrderItemAggregateArgs = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs = {
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithAggregationInput>
    by: OrderItemScalarFieldEnum[]
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }


  export type OrderItemGroupByOutputType = {
    id: number
    name: string
    kotNumber: number
    orderId: number
    userId: number | null
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect = {
    id?: boolean
    name?: boolean
    kotNumber?: boolean
    orderId?: boolean
    userId?: boolean
    Order?: boolean | OrderArgs
    User?: boolean | UserArgs
  }


  export type OrderItemInclude = {
    Order?: boolean | OrderArgs
    User?: boolean | UserArgs
  }

  export type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrderItem :
    S extends undefined ? never :
    S extends { include: any } & (OrderItemArgs | OrderItemFindManyArgs)
    ? OrderItem  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Order' ? OrderGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (OrderItemArgs | OrderItemFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Order' ? OrderGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :  P extends keyof OrderItem ? OrderItem[P] : never
  } 
      : OrderItem


  type OrderItemCountArgs = 
    Omit<OrderItemFindManyArgs, 'select' | 'include'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OrderItem'> extends True ? Prisma__OrderItemClient<OrderItemGetPayload<T>> : Prisma__OrderItemClient<OrderItemGetPayload<T> | null, null>

    /**
     * Find one OrderItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrderItemFindUniqueOrThrowArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OrderItem'> extends True ? Prisma__OrderItemClient<OrderItemGetPayload<T>> : Prisma__OrderItemClient<OrderItemGetPayload<T> | null, null>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderItemFindManyArgs>(
      args?: SelectSubset<T, OrderItemFindManyArgs>
    ): Prisma.PrismaPromise<Array<OrderItemGetPayload<T>>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
    **/
    create<T extends OrderItemCreateArgs>(
      args: SelectSubset<T, OrderItemCreateArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
    **/
    delete<T extends OrderItemDeleteArgs>(
      args: SelectSubset<T, OrderItemDeleteArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderItemUpdateArgs>(
      args: SelectSubset<T, OrderItemUpdateArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderItemDeleteManyArgs>(
      args?: SelectSubset<T, OrderItemDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderItemUpdateManyArgs>(
      args: SelectSubset<T, OrderItemUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
    **/
    upsert<T extends OrderItemUpsertArgs>(
      args: SelectSubset<T, OrderItemUpsertArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderItemClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Order<T extends OrderArgs= {}>(args?: Subset<T, OrderArgs>): Prisma__OrderClient<OrderGetPayload<T> | Null>;

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * OrderItem base type for findUnique actions
   */
  export type OrderItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUnique
   */
  export interface OrderItemFindUniqueArgs extends OrderItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem base type for findFirst actions
   */
  export type OrderItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }

  /**
   * OrderItem findFirst
   */
  export interface OrderItemFindFirstArgs extends OrderItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }


  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }


  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem without action
   */
  export type OrderItemArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
  }



  /**
   * Model Company
   */


  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
    lastOrderNumber: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
    lastOrderNumber: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    arabic: string | null
    logoUrl: string | null
    lastOrderNumber: number | null
    caption: string | null
    footer: string | null
    currencyCode: string | null
    address: string | null
    lat: string | null
    long: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    arabic: string | null
    logoUrl: string | null
    lastOrderNumber: number | null
    caption: string | null
    footer: string | null
    currencyCode: string | null
    address: string | null
    lat: string | null
    long: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    arabic: number
    logoUrl: number
    lastOrderNumber: number
    caption: number
    footer: number
    currencyCode: number
    address: number
    lat: number
    long: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    lastOrderNumber?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    lastOrderNumber?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    arabic?: true
    logoUrl?: true
    lastOrderNumber?: true
    caption?: true
    footer?: true
    currencyCode?: true
    address?: true
    lat?: true
    long?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    arabic?: true
    logoUrl?: true
    lastOrderNumber?: true
    caption?: true
    footer?: true
    currencyCode?: true
    address?: true
    lat?: true
    long?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    arabic?: true
    logoUrl?: true
    lastOrderNumber?: true
    caption?: true
    footer?: true
    currencyCode?: true
    address?: true
    lat?: true
    long?: true
    _all?: true
  }

  export type CompanyAggregateArgs = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs = {
    where?: CompanyWhereInput
    orderBy?: Enumerable<CompanyOrderByWithAggregationInput>
    by: CompanyScalarFieldEnum[]
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }


  export type CompanyGroupByOutputType = {
    id: number
    name: string
    arabic: string
    logoUrl: string
    lastOrderNumber: number
    caption: string
    footer: string
    currencyCode: string
    address: string
    lat: string | null
    long: string | null
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect = {
    id?: boolean
    name?: boolean
    arabic?: boolean
    logoUrl?: boolean
    lastOrderNumber?: boolean
    caption?: boolean
    footer?: boolean
    currencyCode?: boolean
    address?: boolean
    lat?: boolean
    long?: boolean
    taxes?: boolean | Company$taxesArgs
    _count?: boolean | CompanyCountOutputTypeArgs
  }


  export type CompanyInclude = {
    taxes?: boolean | Company$taxesArgs
    _count?: boolean | CompanyCountOutputTypeArgs
  }

  export type CompanyGetPayload<S extends boolean | null | undefined | CompanyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Company :
    S extends undefined ? never :
    S extends { include: any } & (CompanyArgs | CompanyFindManyArgs)
    ? Company  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'taxes' ? Array < TaxGetPayload<S['include'][P]>>  :
        P extends '_count' ? CompanyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CompanyArgs | CompanyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'taxes' ? Array < TaxGetPayload<S['select'][P]>>  :
        P extends '_count' ? CompanyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Company ? Company[P] : never
  } 
      : Company


  type CompanyCountArgs = 
    Omit<CompanyFindManyArgs, 'select' | 'include'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CompanyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Company'> extends True ? Prisma__CompanyClient<CompanyGetPayload<T>> : Prisma__CompanyClient<CompanyGetPayload<T> | null, null>

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CompanyFindUniqueOrThrowArgs>
    ): Prisma__CompanyClient<CompanyGetPayload<T>>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CompanyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Company'> extends True ? Prisma__CompanyClient<CompanyGetPayload<T>> : Prisma__CompanyClient<CompanyGetPayload<T> | null, null>

    /**
     * Find the first Company that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs>
    ): Prisma__CompanyClient<CompanyGetPayload<T>>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyFindManyArgs>(
      args?: SelectSubset<T, CompanyFindManyArgs>
    ): Prisma.PrismaPromise<Array<CompanyGetPayload<T>>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
    **/
    create<T extends CompanyCreateArgs>(
      args: SelectSubset<T, CompanyCreateArgs>
    ): Prisma__CompanyClient<CompanyGetPayload<T>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
    **/
    delete<T extends CompanyDeleteArgs>(
      args: SelectSubset<T, CompanyDeleteArgs>
    ): Prisma__CompanyClient<CompanyGetPayload<T>>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyUpdateArgs>(
      args: SelectSubset<T, CompanyUpdateArgs>
    ): Prisma__CompanyClient<CompanyGetPayload<T>>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyDeleteManyArgs>(
      args?: SelectSubset<T, CompanyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyUpdateManyArgs>(
      args: SelectSubset<T, CompanyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyUpsertArgs>(
      args: SelectSubset<T, CompanyUpsertArgs>
    ): Prisma__CompanyClient<CompanyGetPayload<T>>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CompanyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    taxes<T extends Company$taxesArgs= {}>(args?: Subset<T, Company$taxesArgs>): Prisma.PrismaPromise<Array<TaxGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Company base type for findUnique actions
   */
  export type CompanyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUnique
   */
  export interface CompanyFindUniqueArgs extends CompanyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company base type for findFirst actions
   */
  export type CompanyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }

  /**
   * Company findFirst
   */
  export interface CompanyFindFirstArgs extends CompanyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * Company findMany
   */
  export type CompanyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * Company create
   */
  export type CompanyCreateArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }


  /**
   * Company update
   */
  export type CompanyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }


  /**
   * Company upsert
   */
  export type CompanyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }


  /**
   * Company delete
   */
  export type CompanyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }


  /**
   * Company.taxes
   */
  export type Company$taxesArgs = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaxInclude | null
    where?: TaxWhereInput
    orderBy?: Enumerable<TaxOrderByWithRelationInput>
    cursor?: TaxWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TaxScalarFieldEnum>
  }


  /**
   * Company without action
   */
  export type CompanyArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
  }



  /**
   * Model Tax
   */


  export type AggregateTax = {
    _count: TaxCountAggregateOutputType | null
    _avg: TaxAvgAggregateOutputType | null
    _sum: TaxSumAggregateOutputType | null
    _min: TaxMinAggregateOutputType | null
    _max: TaxMaxAggregateOutputType | null
  }

  export type TaxAvgAggregateOutputType = {
    id: number | null
    value: number | null
    companyId: number | null
  }

  export type TaxSumAggregateOutputType = {
    id: number | null
    value: number | null
    companyId: number | null
  }

  export type TaxMinAggregateOutputType = {
    id: number | null
    name: string | null
    printName: string | null
    isPercentage: boolean | null
    value: number | null
    companyId: number | null
  }

  export type TaxMaxAggregateOutputType = {
    id: number | null
    name: string | null
    printName: string | null
    isPercentage: boolean | null
    value: number | null
    companyId: number | null
  }

  export type TaxCountAggregateOutputType = {
    id: number
    name: number
    printName: number
    isPercentage: number
    value: number
    companyId: number
    _all: number
  }


  export type TaxAvgAggregateInputType = {
    id?: true
    value?: true
    companyId?: true
  }

  export type TaxSumAggregateInputType = {
    id?: true
    value?: true
    companyId?: true
  }

  export type TaxMinAggregateInputType = {
    id?: true
    name?: true
    printName?: true
    isPercentage?: true
    value?: true
    companyId?: true
  }

  export type TaxMaxAggregateInputType = {
    id?: true
    name?: true
    printName?: true
    isPercentage?: true
    value?: true
    companyId?: true
  }

  export type TaxCountAggregateInputType = {
    id?: true
    name?: true
    printName?: true
    isPercentage?: true
    value?: true
    companyId?: true
    _all?: true
  }

  export type TaxAggregateArgs = {
    /**
     * Filter which Tax to aggregate.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: Enumerable<TaxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Taxes
    **/
    _count?: true | TaxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxMaxAggregateInputType
  }

  export type GetTaxAggregateType<T extends TaxAggregateArgs> = {
        [P in keyof T & keyof AggregateTax]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTax[P]>
      : GetScalarType<T[P], AggregateTax[P]>
  }




  export type TaxGroupByArgs = {
    where?: TaxWhereInput
    orderBy?: Enumerable<TaxOrderByWithAggregationInput>
    by: TaxScalarFieldEnum[]
    having?: TaxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxCountAggregateInputType | true
    _avg?: TaxAvgAggregateInputType
    _sum?: TaxSumAggregateInputType
    _min?: TaxMinAggregateInputType
    _max?: TaxMaxAggregateInputType
  }


  export type TaxGroupByOutputType = {
    id: number
    name: string
    printName: string
    isPercentage: boolean
    value: number
    companyId: number | null
    _count: TaxCountAggregateOutputType | null
    _avg: TaxAvgAggregateOutputType | null
    _sum: TaxSumAggregateOutputType | null
    _min: TaxMinAggregateOutputType | null
    _max: TaxMaxAggregateOutputType | null
  }

  type GetTaxGroupByPayload<T extends TaxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TaxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxGroupByOutputType[P]>
            : GetScalarType<T[P], TaxGroupByOutputType[P]>
        }
      >
    >


  export type TaxSelect = {
    id?: boolean
    name?: boolean
    printName?: boolean
    isPercentage?: boolean
    value?: boolean
    companyId?: boolean
    Company?: boolean | CompanyArgs
  }


  export type TaxInclude = {
    Company?: boolean | CompanyArgs
  }

  export type TaxGetPayload<S extends boolean | null | undefined | TaxArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Tax :
    S extends undefined ? never :
    S extends { include: any } & (TaxArgs | TaxFindManyArgs)
    ? Tax  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Company' ? CompanyGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (TaxArgs | TaxFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Company' ? CompanyGetPayload<S['select'][P]> | null :  P extends keyof Tax ? Tax[P] : never
  } 
      : Tax


  type TaxCountArgs = 
    Omit<TaxFindManyArgs, 'select' | 'include'> & {
      select?: TaxCountAggregateInputType | true
    }

  export interface TaxDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tax that matches the filter.
     * @param {TaxFindUniqueArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaxFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TaxFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tax'> extends True ? Prisma__TaxClient<TaxGetPayload<T>> : Prisma__TaxClient<TaxGetPayload<T> | null, null>

    /**
     * Find one Tax that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TaxFindUniqueOrThrowArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaxFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TaxFindUniqueOrThrowArgs>
    ): Prisma__TaxClient<TaxGetPayload<T>>

    /**
     * Find the first Tax that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFindFirstArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaxFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TaxFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tax'> extends True ? Prisma__TaxClient<TaxGetPayload<T>> : Prisma__TaxClient<TaxGetPayload<T> | null, null>

    /**
     * Find the first Tax that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFindFirstOrThrowArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaxFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TaxFindFirstOrThrowArgs>
    ): Prisma__TaxClient<TaxGetPayload<T>>

    /**
     * Find zero or more Taxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taxes
     * const taxes = await prisma.tax.findMany()
     * 
     * // Get first 10 Taxes
     * const taxes = await prisma.tax.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxWithIdOnly = await prisma.tax.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaxFindManyArgs>(
      args?: SelectSubset<T, TaxFindManyArgs>
    ): Prisma.PrismaPromise<Array<TaxGetPayload<T>>>

    /**
     * Create a Tax.
     * @param {TaxCreateArgs} args - Arguments to create a Tax.
     * @example
     * // Create one Tax
     * const Tax = await prisma.tax.create({
     *   data: {
     *     // ... data to create a Tax
     *   }
     * })
     * 
    **/
    create<T extends TaxCreateArgs>(
      args: SelectSubset<T, TaxCreateArgs>
    ): Prisma__TaxClient<TaxGetPayload<T>>

    /**
     * Delete a Tax.
     * @param {TaxDeleteArgs} args - Arguments to delete one Tax.
     * @example
     * // Delete one Tax
     * const Tax = await prisma.tax.delete({
     *   where: {
     *     // ... filter to delete one Tax
     *   }
     * })
     * 
    **/
    delete<T extends TaxDeleteArgs>(
      args: SelectSubset<T, TaxDeleteArgs>
    ): Prisma__TaxClient<TaxGetPayload<T>>

    /**
     * Update one Tax.
     * @param {TaxUpdateArgs} args - Arguments to update one Tax.
     * @example
     * // Update one Tax
     * const tax = await prisma.tax.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaxUpdateArgs>(
      args: SelectSubset<T, TaxUpdateArgs>
    ): Prisma__TaxClient<TaxGetPayload<T>>

    /**
     * Delete zero or more Taxes.
     * @param {TaxDeleteManyArgs} args - Arguments to filter Taxes to delete.
     * @example
     * // Delete a few Taxes
     * const { count } = await prisma.tax.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaxDeleteManyArgs>(
      args?: SelectSubset<T, TaxDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taxes
     * const tax = await prisma.tax.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaxUpdateManyArgs>(
      args: SelectSubset<T, TaxUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tax.
     * @param {TaxUpsertArgs} args - Arguments to update or create a Tax.
     * @example
     * // Update or create a Tax
     * const tax = await prisma.tax.upsert({
     *   create: {
     *     // ... data to create a Tax
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tax we want to update
     *   }
     * })
    **/
    upsert<T extends TaxUpsertArgs>(
      args: SelectSubset<T, TaxUpsertArgs>
    ): Prisma__TaxClient<TaxGetPayload<T>>

    /**
     * Count the number of Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxCountArgs} args - Arguments to filter Taxes to count.
     * @example
     * // Count the number of Taxes
     * const count = await prisma.tax.count({
     *   where: {
     *     // ... the filter for the Taxes we want to count
     *   }
     * })
    **/
    count<T extends TaxCountArgs>(
      args?: Subset<T, TaxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tax.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaxAggregateArgs>(args: Subset<T, TaxAggregateArgs>): Prisma.PrismaPromise<GetTaxAggregateType<T>>

    /**
     * Group by Tax.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxGroupByArgs['orderBy'] }
        : { orderBy?: TaxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Tax.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TaxClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Company<T extends CompanyArgs= {}>(args?: Subset<T, CompanyArgs>): Prisma__CompanyClient<CompanyGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Tax base type for findUnique actions
   */
  export type TaxFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaxInclude | null
    /**
     * Filter, which Tax to fetch.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax findUnique
   */
  export interface TaxFindUniqueArgs extends TaxFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tax findUniqueOrThrow
   */
  export type TaxFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaxInclude | null
    /**
     * Filter, which Tax to fetch.
     */
    where: TaxWhereUniqueInput
  }


  /**
   * Tax base type for findFirst actions
   */
  export type TaxFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaxInclude | null
    /**
     * Filter, which Tax to fetch.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: Enumerable<TaxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taxes.
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taxes.
     */
    distinct?: Enumerable<TaxScalarFieldEnum>
  }

  /**
   * Tax findFirst
   */
  export interface TaxFindFirstArgs extends TaxFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tax findFirstOrThrow
   */
  export type TaxFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaxInclude | null
    /**
     * Filter, which Tax to fetch.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: Enumerable<TaxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taxes.
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taxes.
     */
    distinct?: Enumerable<TaxScalarFieldEnum>
  }


  /**
   * Tax findMany
   */
  export type TaxFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaxInclude | null
    /**
     * Filter, which Taxes to fetch.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: Enumerable<TaxOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Taxes.
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    distinct?: Enumerable<TaxScalarFieldEnum>
  }


  /**
   * Tax create
   */
  export type TaxCreateArgs = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaxInclude | null
    /**
     * The data needed to create a Tax.
     */
    data: XOR<TaxCreateInput, TaxUncheckedCreateInput>
  }


  /**
   * Tax update
   */
  export type TaxUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaxInclude | null
    /**
     * The data needed to update a Tax.
     */
    data: XOR<TaxUpdateInput, TaxUncheckedUpdateInput>
    /**
     * Choose, which Tax to update.
     */
    where: TaxWhereUniqueInput
  }


  /**
   * Tax updateMany
   */
  export type TaxUpdateManyArgs = {
    /**
     * The data used to update Taxes.
     */
    data: XOR<TaxUpdateManyMutationInput, TaxUncheckedUpdateManyInput>
    /**
     * Filter which Taxes to update
     */
    where?: TaxWhereInput
  }


  /**
   * Tax upsert
   */
  export type TaxUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaxInclude | null
    /**
     * The filter to search for the Tax to update in case it exists.
     */
    where: TaxWhereUniqueInput
    /**
     * In case the Tax found by the `where` argument doesn't exist, create a new Tax with this data.
     */
    create: XOR<TaxCreateInput, TaxUncheckedCreateInput>
    /**
     * In case the Tax was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxUpdateInput, TaxUncheckedUpdateInput>
  }


  /**
   * Tax delete
   */
  export type TaxDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaxInclude | null
    /**
     * Filter which Tax to delete.
     */
    where: TaxWhereUniqueInput
  }


  /**
   * Tax deleteMany
   */
  export type TaxDeleteManyArgs = {
    /**
     * Filter which Taxes to delete
     */
    where?: TaxWhereInput
  }


  /**
   * Tax without action
   */
  export type TaxArgs = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaxInclude | null
  }



  /**
   * Enums
   */

  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    kitchenId: 'kitchenId',
    isAvailableAllDay: 'isAvailableAllDay',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
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

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const KitchenScalarFieldEnum: {
    id: 'id',
    name: 'name',
    printer: 'printer'
  };

  export type KitchenScalarFieldEnum = (typeof KitchenScalarFieldEnum)[keyof typeof KitchenScalarFieldEnum]


  export const ModifierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    productId: 'productId'
  };

  export type ModifierScalarFieldEnum = (typeof ModifierScalarFieldEnum)[keyof typeof ModifierScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    kotNumber: 'kotNumber',
    orderId: 'orderId',
    userId: 'userId'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    paymentStatus: 'paymentStatus',
    orderStatus: 'orderStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    secondaryLanguageName: 'secondaryLanguageName',
    arabic: 'arabic',
    price: 'price',
    cost: 'cost',
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

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TaxScalarFieldEnum: {
    id: 'id',
    name: 'name',
    printName: 'printName',
    isPercentage: 'isPercentage',
    value: 'value',
    companyId: 'companyId'
  };

  export type TaxScalarFieldEnum = (typeof TaxScalarFieldEnum)[keyof typeof TaxScalarFieldEnum]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VariantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    productId: 'productId'
  };

  export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    password?: IntFilter | number
    name?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    isAdmin?: BoolFilter | boolean
    isCashier?: BoolFilter | boolean
    isWaiter?: BoolFilter | boolean
    isKitchenUser?: BoolFilter | boolean
    orders?: OrderListRelationFilter
    OrderItem?: OrderItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    isAdmin?: SortOrder
    isCashier?: SortOrder
    isWaiter?: SortOrder
    isKitchenUser?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    OrderItem?: OrderItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    username?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    isAdmin?: SortOrder
    isCashier?: SortOrder
    isWaiter?: SortOrder
    isKitchenUser?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    password?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    phone?: StringNullableWithAggregatesFilter | string | null
    isAdmin?: BoolWithAggregatesFilter | boolean
    isCashier?: BoolWithAggregatesFilter | boolean
    isWaiter?: BoolWithAggregatesFilter | boolean
    isKitchenUser?: BoolWithAggregatesFilter | boolean
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    secondaryLanguageName?: StringNullableFilter | string | null
    arabic?: StringFilter | string
    price?: FloatFilter | number
    cost?: FloatFilter | number
    image?: StringFilter | string
    inStock?: BoolFilter | boolean
    hasVariant?: BoolFilter | boolean
    hasModifiers?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isArchived?: BoolFilter | boolean
    collectionId?: IntFilter | number
    categoryId?: IntFilter | number
    collection?: XOR<CollectionRelationFilter, CollectionWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    Variant?: VariantListRelationFilter
    Modifier?: ModifierListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    secondaryLanguageName?: SortOrder
    arabic?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    image?: SortOrder
    inStock?: SortOrder
    hasVariant?: SortOrder
    hasModifiers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isArchived?: SortOrder
    collectionId?: SortOrder
    categoryId?: SortOrder
    collection?: CollectionOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    Variant?: VariantOrderByRelationAggregateInput
    Modifier?: ModifierOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = {
    id?: number
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    secondaryLanguageName?: SortOrder
    arabic?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    image?: SortOrder
    inStock?: SortOrder
    hasVariant?: SortOrder
    hasModifiers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isArchived?: SortOrder
    collectionId?: SortOrder
    categoryId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    secondaryLanguageName?: StringNullableWithAggregatesFilter | string | null
    arabic?: StringWithAggregatesFilter | string
    price?: FloatWithAggregatesFilter | number
    cost?: FloatWithAggregatesFilter | number
    image?: StringWithAggregatesFilter | string
    inStock?: BoolWithAggregatesFilter | boolean
    hasVariant?: BoolWithAggregatesFilter | boolean
    hasModifiers?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isArchived?: BoolWithAggregatesFilter | boolean
    collectionId?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    color?: StringFilter | string
    kitchenId?: IntFilter | number
    isAvailableAllDay?: BoolFilter | boolean
    startTime?: StringFilter | string
    endTime?: StringFilter | string
    kitchen?: XOR<KitchenRelationFilter, KitchenWhereInput>
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    kitchenId?: SortOrder
    isAvailableAllDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    kitchen?: KitchenOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = {
    id?: number
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    kitchenId?: SortOrder
    isAvailableAllDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    color?: StringWithAggregatesFilter | string
    kitchenId?: IntWithAggregatesFilter | number
    isAvailableAllDay?: BoolWithAggregatesFilter | boolean
    startTime?: StringWithAggregatesFilter | string
    endTime?: StringWithAggregatesFilter | string
  }

  export type CollectionWhereInput = {
    AND?: Enumerable<CollectionWhereInput>
    OR?: Enumerable<CollectionWhereInput>
    NOT?: Enumerable<CollectionWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    products?: ProductListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CollectionWhereUniqueInput = {
    id?: number
  }

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _avg?: CollectionAvgOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
    _sum?: CollectionSumOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CollectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<CollectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CollectionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type KitchenWhereInput = {
    AND?: Enumerable<KitchenWhereInput>
    OR?: Enumerable<KitchenWhereInput>
    NOT?: Enumerable<KitchenWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    printer?: StringFilter | string
    Category?: CategoryListRelationFilter
  }

  export type KitchenOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    printer?: SortOrder
    Category?: CategoryOrderByRelationAggregateInput
  }

  export type KitchenWhereUniqueInput = {
    id?: number
  }

  export type KitchenOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    printer?: SortOrder
    _count?: KitchenCountOrderByAggregateInput
    _avg?: KitchenAvgOrderByAggregateInput
    _max?: KitchenMaxOrderByAggregateInput
    _min?: KitchenMinOrderByAggregateInput
    _sum?: KitchenSumOrderByAggregateInput
  }

  export type KitchenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<KitchenScalarWhereWithAggregatesInput>
    OR?: Enumerable<KitchenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<KitchenScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    printer?: StringWithAggregatesFilter | string
  }

  export type VariantWhereInput = {
    AND?: Enumerable<VariantWhereInput>
    OR?: Enumerable<VariantWhereInput>
    NOT?: Enumerable<VariantWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    price?: FloatFilter | number
    productId?: IntFilter | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type VariantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type VariantWhereUniqueInput = {
    id?: number
  }

  export type VariantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    _count?: VariantCountOrderByAggregateInput
    _avg?: VariantAvgOrderByAggregateInput
    _max?: VariantMaxOrderByAggregateInput
    _min?: VariantMinOrderByAggregateInput
    _sum?: VariantSumOrderByAggregateInput
  }

  export type VariantScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VariantScalarWhereWithAggregatesInput>
    OR?: Enumerable<VariantScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VariantScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    price?: FloatWithAggregatesFilter | number
    productId?: IntWithAggregatesFilter | number
  }

  export type ModifierWhereInput = {
    AND?: Enumerable<ModifierWhereInput>
    OR?: Enumerable<ModifierWhereInput>
    NOT?: Enumerable<ModifierWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    price?: FloatFilter | number
    productId?: IntFilter | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ModifierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ModifierWhereUniqueInput = {
    id?: number
  }

  export type ModifierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    _count?: ModifierCountOrderByAggregateInput
    _avg?: ModifierAvgOrderByAggregateInput
    _max?: ModifierMaxOrderByAggregateInput
    _min?: ModifierMinOrderByAggregateInput
    _sum?: ModifierSumOrderByAggregateInput
  }

  export type ModifierScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModifierScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModifierScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModifierScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    price?: FloatWithAggregatesFilter | number
    productId?: IntWithAggregatesFilter | number
  }

  export type OrderWhereInput = {
    AND?: Enumerable<OrderWhereInput>
    OR?: Enumerable<OrderWhereInput>
    NOT?: Enumerable<OrderWhereInput>
    id?: IntFilter | number
    orderNumber?: IntFilter | number
    paymentStatus?: StringFilter | string
    orderStatus?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
    OrderItem?: OrderItemListRelationFilter
    createdUser?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    paymentStatus?: SortOrder
    orderStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    OrderItem?: OrderItemOrderByRelationAggregateInput
    createdUser?: UserOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = {
    id?: number
    orderNumber?: number
  }

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    paymentStatus?: SortOrder
    orderStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    orderNumber?: IntWithAggregatesFilter | number
    paymentStatus?: StringWithAggregatesFilter | string
    orderStatus?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntWithAggregatesFilter | number
  }

  export type OrderItemWhereInput = {
    AND?: Enumerable<OrderItemWhereInput>
    OR?: Enumerable<OrderItemWhereInput>
    NOT?: Enumerable<OrderItemWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    kotNumber?: IntFilter | number
    orderId?: IntFilter | number
    userId?: IntNullableFilter | number | null
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    kotNumber?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    Order?: OrderOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = {
    id?: number
  }

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    kotNumber?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    kotNumber?: IntWithAggregatesFilter | number
    orderId?: IntWithAggregatesFilter | number
    userId?: IntNullableWithAggregatesFilter | number | null
  }

  export type CompanyWhereInput = {
    AND?: Enumerable<CompanyWhereInput>
    OR?: Enumerable<CompanyWhereInput>
    NOT?: Enumerable<CompanyWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    arabic?: StringFilter | string
    logoUrl?: StringFilter | string
    lastOrderNumber?: IntFilter | number
    caption?: StringFilter | string
    footer?: StringFilter | string
    currencyCode?: StringFilter | string
    address?: StringFilter | string
    lat?: StringNullableFilter | string | null
    long?: StringNullableFilter | string | null
    taxes?: TaxListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    arabic?: SortOrder
    logoUrl?: SortOrder
    lastOrderNumber?: SortOrder
    caption?: SortOrder
    footer?: SortOrder
    currencyCode?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    taxes?: TaxOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = {
    id?: number
  }

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    arabic?: SortOrder
    logoUrl?: SortOrder
    lastOrderNumber?: SortOrder
    caption?: SortOrder
    footer?: SortOrder
    currencyCode?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    arabic?: StringWithAggregatesFilter | string
    logoUrl?: StringWithAggregatesFilter | string
    lastOrderNumber?: IntWithAggregatesFilter | number
    caption?: StringWithAggregatesFilter | string
    footer?: StringWithAggregatesFilter | string
    currencyCode?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    lat?: StringNullableWithAggregatesFilter | string | null
    long?: StringNullableWithAggregatesFilter | string | null
  }

  export type TaxWhereInput = {
    AND?: Enumerable<TaxWhereInput>
    OR?: Enumerable<TaxWhereInput>
    NOT?: Enumerable<TaxWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    printName?: StringFilter | string
    isPercentage?: BoolFilter | boolean
    value?: FloatFilter | number
    companyId?: IntNullableFilter | number | null
    Company?: XOR<CompanyRelationFilter, CompanyWhereInput> | null
  }

  export type TaxOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    printName?: SortOrder
    isPercentage?: SortOrder
    value?: SortOrder
    companyId?: SortOrder
    Company?: CompanyOrderByWithRelationInput
  }

  export type TaxWhereUniqueInput = {
    id?: number
  }

  export type TaxOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    printName?: SortOrder
    isPercentage?: SortOrder
    value?: SortOrder
    companyId?: SortOrder
    _count?: TaxCountOrderByAggregateInput
    _avg?: TaxAvgOrderByAggregateInput
    _max?: TaxMaxOrderByAggregateInput
    _min?: TaxMinOrderByAggregateInput
    _sum?: TaxSumOrderByAggregateInput
  }

  export type TaxScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TaxScalarWhereWithAggregatesInput>
    OR?: Enumerable<TaxScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TaxScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    printName?: StringWithAggregatesFilter | string
    isPercentage?: BoolWithAggregatesFilter | boolean
    value?: FloatWithAggregatesFilter | number
    companyId?: IntNullableWithAggregatesFilter | number | null
  }

  export type UserCreateInput = {
    username: string
    password: number
    name?: string | null
    phone?: string | null
    isAdmin?: boolean
    isCashier?: boolean
    isWaiter?: boolean
    isKitchenUser?: boolean
    orders?: OrderCreateNestedManyWithoutCreatedUserInput
    OrderItem?: OrderItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: number
    name?: string | null
    phone?: string | null
    isAdmin?: boolean
    isCashier?: boolean
    isWaiter?: boolean
    isKitchenUser?: boolean
    orders?: OrderUncheckedCreateNestedManyWithoutCreatedUserInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCashier?: BoolFieldUpdateOperationsInput | boolean
    isWaiter?: BoolFieldUpdateOperationsInput | boolean
    isKitchenUser?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUpdateManyWithoutCreatedUserNestedInput
    OrderItem?: OrderItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCashier?: BoolFieldUpdateOperationsInput | boolean
    isWaiter?: BoolFieldUpdateOperationsInput | boolean
    isKitchenUser?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUncheckedUpdateManyWithoutCreatedUserNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCashier?: BoolFieldUpdateOperationsInput | boolean
    isWaiter?: BoolFieldUpdateOperationsInput | boolean
    isKitchenUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCashier?: BoolFieldUpdateOperationsInput | boolean
    isWaiter?: BoolFieldUpdateOperationsInput | boolean
    isKitchenUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateInput = {
    name: string
    secondaryLanguageName?: string | null
    arabic: string
    price: number
    cost: number
    image?: string
    inStock?: boolean
    hasVariant?: boolean
    hasModifiers?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isArchived?: boolean
    collection: CollectionCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    Variant?: VariantCreateNestedManyWithoutProductInput
    Modifier?: ModifierCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    secondaryLanguageName?: string | null
    arabic: string
    price: number
    cost: number
    image?: string
    inStock?: boolean
    hasVariant?: boolean
    hasModifiers?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isArchived?: boolean
    collectionId: number
    categoryId: number
    Variant?: VariantUncheckedCreateNestedManyWithoutProductInput
    Modifier?: ModifierUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    collection?: CollectionUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    Variant?: VariantUpdateManyWithoutProductNestedInput
    Modifier?: ModifierUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    collectionId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    Variant?: VariantUncheckedUpdateManyWithoutProductNestedInput
    Modifier?: ModifierUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    collectionId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    color: string
    isAvailableAllDay?: boolean
    startTime?: string
    endTime?: string
    kitchen: KitchenCreateNestedOneWithoutCategoryInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    color: string
    kitchenId: number
    isAvailableAllDay?: boolean
    startTime?: string
    endTime?: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isAvailableAllDay?: BoolFieldUpdateOperationsInput | boolean
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    kitchen?: KitchenUpdateOneRequiredWithoutCategoryNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    kitchenId?: IntFieldUpdateOperationsInput | number
    isAvailableAllDay?: BoolFieldUpdateOperationsInput | boolean
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isAvailableAllDay?: BoolFieldUpdateOperationsInput | boolean
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    kitchenId?: IntFieldUpdateOperationsInput | number
    isAvailableAllDay?: BoolFieldUpdateOperationsInput | boolean
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionCreateInput = {
    name: string
    products?: ProductCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: number
    name: string
    products?: ProductUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type KitchenCreateInput = {
    name: string
    printer: string
    Category?: CategoryCreateNestedManyWithoutKitchenInput
  }

  export type KitchenUncheckedCreateInput = {
    id?: number
    name: string
    printer: string
    Category?: CategoryUncheckedCreateNestedManyWithoutKitchenInput
  }

  export type KitchenUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    printer?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUpdateManyWithoutKitchenNestedInput
  }

  export type KitchenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    printer?: StringFieldUpdateOperationsInput | string
    Category?: CategoryUncheckedUpdateManyWithoutKitchenNestedInput
  }

  export type KitchenUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    printer?: StringFieldUpdateOperationsInput | string
  }

  export type KitchenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    printer?: StringFieldUpdateOperationsInput | string
  }

  export type VariantCreateInput = {
    name: string
    price: number
    product: ProductCreateNestedOneWithoutVariantInput
  }

  export type VariantUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    productId: number
  }

  export type VariantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutVariantNestedInput
  }

  export type VariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type VariantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type VariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ModifierCreateInput = {
    name: string
    price: number
    product: ProductCreateNestedOneWithoutModifierInput
  }

  export type ModifierUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    productId: number
  }

  export type ModifierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutModifierNestedInput
  }

  export type ModifierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ModifierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ModifierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    orderNumber: number
    paymentStatus: string
    orderStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
    createdUser: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    orderNumber: number
    paymentStatus: string
    orderStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
    createdUser?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUpdateManyMutationInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateInput = {
    name: string
    kotNumber: number
    Order: OrderCreateNestedOneWithoutOrderItemInput
    User?: UserCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    name: string
    kotNumber: number
    orderId: number
    userId?: number | null
  }

  export type OrderItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    kotNumber?: IntFieldUpdateOperationsInput | number
    Order?: OrderUpdateOneRequiredWithoutOrderItemNestedInput
    User?: UserUpdateOneWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    kotNumber?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    kotNumber?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    kotNumber?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CompanyCreateInput = {
    name: string
    arabic: string
    logoUrl: string
    lastOrderNumber: number
    caption: string
    footer: string
    currencyCode: string
    address: string
    lat?: string | null
    long?: string | null
    taxes?: TaxCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    arabic: string
    logoUrl: string
    lastOrderNumber: number
    caption: string
    footer: string
    currencyCode: string
    address: string
    lat?: string | null
    long?: string | null
    taxes?: TaxUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    lastOrderNumber?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    footer?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    long?: NullableStringFieldUpdateOperationsInput | string | null
    taxes?: TaxUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    lastOrderNumber?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    footer?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    long?: NullableStringFieldUpdateOperationsInput | string | null
    taxes?: TaxUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    lastOrderNumber?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    footer?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    long?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    lastOrderNumber?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    footer?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    long?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaxCreateInput = {
    name: string
    printName: string
    isPercentage?: boolean
    value: number
    Company?: CompanyCreateNestedOneWithoutTaxesInput
  }

  export type TaxUncheckedCreateInput = {
    id?: number
    name: string
    printName: string
    isPercentage?: boolean
    value: number
    companyId?: number | null
  }

  export type TaxUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    printName?: StringFieldUpdateOperationsInput | string
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
    Company?: CompanyUpdateOneWithoutTaxesNestedInput
  }

  export type TaxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    printName?: StringFieldUpdateOperationsInput | string
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaxUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    printName?: StringFieldUpdateOperationsInput | string
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    printName?: StringFieldUpdateOperationsInput | string
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    isAdmin?: SortOrder
    isCashier?: SortOrder
    isWaiter?: SortOrder
    isKitchenUser?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    isAdmin?: SortOrder
    isCashier?: SortOrder
    isWaiter?: SortOrder
    isKitchenUser?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    isAdmin?: SortOrder
    isCashier?: SortOrder
    isWaiter?: SortOrder
    isKitchenUser?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CollectionRelationFilter = {
    is?: CollectionWhereInput
    isNot?: CollectionWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type VariantListRelationFilter = {
    every?: VariantWhereInput
    some?: VariantWhereInput
    none?: VariantWhereInput
  }

  export type ModifierListRelationFilter = {
    every?: ModifierWhereInput
    some?: ModifierWhereInput
    none?: ModifierWhereInput
  }

  export type VariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModifierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    secondaryLanguageName?: SortOrder
    arabic?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    image?: SortOrder
    inStock?: SortOrder
    hasVariant?: SortOrder
    hasModifiers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isArchived?: SortOrder
    collectionId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    collectionId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    secondaryLanguageName?: SortOrder
    arabic?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    image?: SortOrder
    inStock?: SortOrder
    hasVariant?: SortOrder
    hasModifiers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isArchived?: SortOrder
    collectionId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    secondaryLanguageName?: SortOrder
    arabic?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    image?: SortOrder
    inStock?: SortOrder
    hasVariant?: SortOrder
    hasModifiers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isArchived?: SortOrder
    collectionId?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    collectionId?: SortOrder
    categoryId?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type KitchenRelationFilter = {
    is?: KitchenWhereInput
    isNot?: KitchenWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    kitchenId?: SortOrder
    isAvailableAllDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    kitchenId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    kitchenId?: SortOrder
    isAvailableAllDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    kitchenId?: SortOrder
    isAvailableAllDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    kitchenId?: SortOrder
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CollectionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CollectionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KitchenCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    printer?: SortOrder
  }

  export type KitchenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KitchenMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    printer?: SortOrder
  }

  export type KitchenMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    printer?: SortOrder
  }

  export type KitchenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type VariantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type VariantAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type VariantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type VariantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type VariantSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type ModifierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type ModifierAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type ModifierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type ModifierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type ModifierSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    productId?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    paymentStatus?: SortOrder
    orderStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    userId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    paymentStatus?: SortOrder
    orderStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    paymentStatus?: SortOrder
    orderStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kotNumber?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    kotNumber?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kotNumber?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kotNumber?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    kotNumber?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type TaxListRelationFilter = {
    every?: TaxWhereInput
    some?: TaxWhereInput
    none?: TaxWhereInput
  }

  export type TaxOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arabic?: SortOrder
    logoUrl?: SortOrder
    lastOrderNumber?: SortOrder
    caption?: SortOrder
    footer?: SortOrder
    currencyCode?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    lastOrderNumber?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arabic?: SortOrder
    logoUrl?: SortOrder
    lastOrderNumber?: SortOrder
    caption?: SortOrder
    footer?: SortOrder
    currencyCode?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arabic?: SortOrder
    logoUrl?: SortOrder
    lastOrderNumber?: SortOrder
    caption?: SortOrder
    footer?: SortOrder
    currencyCode?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
    lastOrderNumber?: SortOrder
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type TaxCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    printName?: SortOrder
    isPercentage?: SortOrder
    value?: SortOrder
    companyId?: SortOrder
  }

  export type TaxAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    companyId?: SortOrder
  }

  export type TaxMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    printName?: SortOrder
    isPercentage?: SortOrder
    value?: SortOrder
    companyId?: SortOrder
  }

  export type TaxMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    printName?: SortOrder
    isPercentage?: SortOrder
    value?: SortOrder
    companyId?: SortOrder
  }

  export type TaxSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    companyId?: SortOrder
  }

  export type OrderCreateNestedManyWithoutCreatedUserInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCreatedUserInput>, Enumerable<OrderUncheckedCreateWithoutCreatedUserInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCreatedUserInput>
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type OrderItemCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutUserInput>, Enumerable<OrderItemUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutUserInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type OrderUncheckedCreateNestedManyWithoutCreatedUserInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCreatedUserInput>, Enumerable<OrderUncheckedCreateWithoutCreatedUserInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCreatedUserInput>
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type OrderItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutUserInput>, Enumerable<OrderItemUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutUserInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrderUpdateManyWithoutCreatedUserNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCreatedUserInput>, Enumerable<OrderUncheckedCreateWithoutCreatedUserInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCreatedUserInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutCreatedUserInput>
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutCreatedUserInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutCreatedUserInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type OrderItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutUserInput>, Enumerable<OrderItemUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type OrderUncheckedUpdateManyWithoutCreatedUserNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCreatedUserInput>, Enumerable<OrderUncheckedCreateWithoutCreatedUserInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCreatedUserInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutCreatedUserInput>
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutCreatedUserInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutCreatedUserInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutUserInput>, Enumerable<OrderItemUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type CollectionCreateNestedOneWithoutProductsInput = {
    create?: XOR<CollectionCreateWithoutProductsInput, CollectionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutProductsInput
    connect?: CollectionWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type VariantCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<VariantCreateWithoutProductInput>, Enumerable<VariantUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<VariantCreateOrConnectWithoutProductInput>
    connect?: Enumerable<VariantWhereUniqueInput>
  }

  export type ModifierCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ModifierCreateWithoutProductInput>, Enumerable<ModifierUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ModifierCreateOrConnectWithoutProductInput>
    connect?: Enumerable<ModifierWhereUniqueInput>
  }

  export type VariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<VariantCreateWithoutProductInput>, Enumerable<VariantUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<VariantCreateOrConnectWithoutProductInput>
    connect?: Enumerable<VariantWhereUniqueInput>
  }

  export type ModifierUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ModifierCreateWithoutProductInput>, Enumerable<ModifierUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ModifierCreateOrConnectWithoutProductInput>
    connect?: Enumerable<ModifierWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CollectionUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CollectionCreateWithoutProductsInput, CollectionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutProductsInput
    upsert?: CollectionUpsertWithoutProductsInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<CollectionUpdateWithoutProductsInput, CollectionUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type VariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<VariantCreateWithoutProductInput>, Enumerable<VariantUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<VariantCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<VariantUpsertWithWhereUniqueWithoutProductInput>
    set?: Enumerable<VariantWhereUniqueInput>
    disconnect?: Enumerable<VariantWhereUniqueInput>
    delete?: Enumerable<VariantWhereUniqueInput>
    connect?: Enumerable<VariantWhereUniqueInput>
    update?: Enumerable<VariantUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<VariantUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<VariantScalarWhereInput>
  }

  export type ModifierUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ModifierCreateWithoutProductInput>, Enumerable<ModifierUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ModifierCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ModifierUpsertWithWhereUniqueWithoutProductInput>
    set?: Enumerable<ModifierWhereUniqueInput>
    disconnect?: Enumerable<ModifierWhereUniqueInput>
    delete?: Enumerable<ModifierWhereUniqueInput>
    connect?: Enumerable<ModifierWhereUniqueInput>
    update?: Enumerable<ModifierUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ModifierUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ModifierScalarWhereInput>
  }

  export type VariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<VariantCreateWithoutProductInput>, Enumerable<VariantUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<VariantCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<VariantUpsertWithWhereUniqueWithoutProductInput>
    set?: Enumerable<VariantWhereUniqueInput>
    disconnect?: Enumerable<VariantWhereUniqueInput>
    delete?: Enumerable<VariantWhereUniqueInput>
    connect?: Enumerable<VariantWhereUniqueInput>
    update?: Enumerable<VariantUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<VariantUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<VariantScalarWhereInput>
  }

  export type ModifierUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ModifierCreateWithoutProductInput>, Enumerable<ModifierUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ModifierCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ModifierUpsertWithWhereUniqueWithoutProductInput>
    set?: Enumerable<ModifierWhereUniqueInput>
    disconnect?: Enumerable<ModifierWhereUniqueInput>
    delete?: Enumerable<ModifierWhereUniqueInput>
    connect?: Enumerable<ModifierWhereUniqueInput>
    update?: Enumerable<ModifierUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ModifierUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ModifierScalarWhereInput>
  }

  export type KitchenCreateNestedOneWithoutCategoryInput = {
    create?: XOR<KitchenCreateWithoutCategoryInput, KitchenUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: KitchenCreateOrConnectWithoutCategoryInput
    connect?: KitchenWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type KitchenUpdateOneRequiredWithoutCategoryNestedInput = {
    create?: XOR<KitchenCreateWithoutCategoryInput, KitchenUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: KitchenCreateOrConnectWithoutCategoryInput
    upsert?: KitchenUpsertWithoutCategoryInput
    connect?: KitchenWhereUniqueInput
    update?: XOR<KitchenUpdateWithoutCategoryInput, KitchenUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCategoryInput>
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCategoryInput>
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductCreateNestedManyWithoutCollectionInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCollectionInput>, Enumerable<ProductUncheckedCreateWithoutCollectionInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCollectionInput>
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCollectionInput>, Enumerable<ProductUncheckedCreateWithoutCollectionInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCollectionInput>
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCollectionInput>, Enumerable<ProductUncheckedCreateWithoutCollectionInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCollectionInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCollectionInput>
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCollectionInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCollectionInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCollectionInput>, Enumerable<ProductUncheckedCreateWithoutCollectionInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCollectionInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCollectionInput>
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCollectionInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCollectionInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type CategoryCreateNestedManyWithoutKitchenInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutKitchenInput>, Enumerable<CategoryUncheckedCreateWithoutKitchenInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutKitchenInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type CategoryUncheckedCreateNestedManyWithoutKitchenInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutKitchenInput>, Enumerable<CategoryUncheckedCreateWithoutKitchenInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutKitchenInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type CategoryUpdateManyWithoutKitchenNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutKitchenInput>, Enumerable<CategoryUncheckedCreateWithoutKitchenInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutKitchenInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutKitchenInput>
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutKitchenInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutKitchenInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type CategoryUncheckedUpdateManyWithoutKitchenNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutKitchenInput>, Enumerable<CategoryUncheckedCreateWithoutKitchenInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutKitchenInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutKitchenInput>
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutKitchenInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutKitchenInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type ProductCreateNestedOneWithoutVariantInput = {
    create?: XOR<ProductCreateWithoutVariantInput, ProductUncheckedCreateWithoutVariantInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutVariantNestedInput = {
    create?: XOR<ProductCreateWithoutVariantInput, ProductUncheckedCreateWithoutVariantInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantInput
    upsert?: ProductUpsertWithoutVariantInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutVariantInput, ProductUncheckedUpdateWithoutVariantInput>
  }

  export type ProductCreateNestedOneWithoutModifierInput = {
    create?: XOR<ProductCreateWithoutModifierInput, ProductUncheckedCreateWithoutModifierInput>
    connectOrCreate?: ProductCreateOrConnectWithoutModifierInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutModifierNestedInput = {
    create?: XOR<ProductCreateWithoutModifierInput, ProductUncheckedCreateWithoutModifierInput>
    connectOrCreate?: ProductCreateOrConnectWithoutModifierInput
    upsert?: ProductUpsertWithoutModifierInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutModifierInput, ProductUncheckedUpdateWithoutModifierInput>
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutOrderInput>
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutOrderInput>
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type OrderCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemInput
    connect?: OrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<UserCreateWithoutOrderItemInput, UserUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderItemInput
    connect?: UserWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemInput
    upsert?: OrderUpsertWithoutOrderItemInput
    connect?: OrderWhereUniqueInput
    update?: XOR<OrderUpdateWithoutOrderItemInput, OrderUncheckedUpdateWithoutOrderItemInput>
  }

  export type UserUpdateOneWithoutOrderItemNestedInput = {
    create?: XOR<UserCreateWithoutOrderItemInput, UserUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderItemInput
    upsert?: UserUpsertWithoutOrderItemInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOrderItemInput, UserUncheckedUpdateWithoutOrderItemInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaxCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<TaxCreateWithoutCompanyInput>, Enumerable<TaxUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<TaxCreateOrConnectWithoutCompanyInput>
    connect?: Enumerable<TaxWhereUniqueInput>
  }

  export type TaxUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<TaxCreateWithoutCompanyInput>, Enumerable<TaxUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<TaxCreateOrConnectWithoutCompanyInput>
    connect?: Enumerable<TaxWhereUniqueInput>
  }

  export type TaxUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<TaxCreateWithoutCompanyInput>, Enumerable<TaxUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<TaxCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<TaxUpsertWithWhereUniqueWithoutCompanyInput>
    set?: Enumerable<TaxWhereUniqueInput>
    disconnect?: Enumerable<TaxWhereUniqueInput>
    delete?: Enumerable<TaxWhereUniqueInput>
    connect?: Enumerable<TaxWhereUniqueInput>
    update?: Enumerable<TaxUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<TaxUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<TaxScalarWhereInput>
  }

  export type TaxUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<TaxCreateWithoutCompanyInput>, Enumerable<TaxUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<TaxCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<TaxUpsertWithWhereUniqueWithoutCompanyInput>
    set?: Enumerable<TaxWhereUniqueInput>
    disconnect?: Enumerable<TaxWhereUniqueInput>
    delete?: Enumerable<TaxWhereUniqueInput>
    connect?: Enumerable<TaxWhereUniqueInput>
    update?: Enumerable<TaxUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<TaxUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<TaxScalarWhereInput>
  }

  export type CompanyCreateNestedOneWithoutTaxesInput = {
    create?: XOR<CompanyCreateWithoutTaxesInput, CompanyUncheckedCreateWithoutTaxesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTaxesInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneWithoutTaxesNestedInput = {
    create?: XOR<CompanyCreateWithoutTaxesInput, CompanyUncheckedCreateWithoutTaxesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTaxesInput
    upsert?: CompanyUpsertWithoutTaxesInput
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutTaxesInput, CompanyUncheckedUpdateWithoutTaxesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type OrderCreateWithoutCreatedUserInput = {
    orderNumber: number
    paymentStatus: string
    orderStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderItem?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCreatedUserInput = {
    id?: number
    orderNumber: number
    paymentStatus: string
    orderStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCreatedUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCreatedUserInput, OrderUncheckedCreateWithoutCreatedUserInput>
  }

  export type OrderItemCreateWithoutUserInput = {
    name: string
    kotNumber: number
    Order: OrderCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    kotNumber: number
    orderId: number
  }

  export type OrderItemCreateOrConnectWithoutUserInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutUserInput, OrderItemUncheckedCreateWithoutUserInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutCreatedUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCreatedUserInput, OrderUncheckedUpdateWithoutCreatedUserInput>
    create: XOR<OrderCreateWithoutCreatedUserInput, OrderUncheckedCreateWithoutCreatedUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCreatedUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCreatedUserInput, OrderUncheckedUpdateWithoutCreatedUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutCreatedUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrdersInput>
  }

  export type OrderScalarWhereInput = {
    AND?: Enumerable<OrderScalarWhereInput>
    OR?: Enumerable<OrderScalarWhereInput>
    NOT?: Enumerable<OrderScalarWhereInput>
    id?: IntFilter | number
    orderNumber?: IntFilter | number
    paymentStatus?: StringFilter | string
    orderStatus?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
  }

  export type OrderItemUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutUserInput, OrderItemUncheckedUpdateWithoutUserInput>
    create: XOR<OrderItemCreateWithoutUserInput, OrderItemUncheckedCreateWithoutUserInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutUserInput, OrderItemUncheckedUpdateWithoutUserInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutUserInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderItemInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: Enumerable<OrderItemScalarWhereInput>
    OR?: Enumerable<OrderItemScalarWhereInput>
    NOT?: Enumerable<OrderItemScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    kotNumber?: IntFilter | number
    orderId?: IntFilter | number
    userId?: IntNullableFilter | number | null
  }

  export type CollectionCreateWithoutProductsInput = {
    name: string
  }

  export type CollectionUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
  }

  export type CollectionCreateOrConnectWithoutProductsInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutProductsInput, CollectionUncheckedCreateWithoutProductsInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    color: string
    isAvailableAllDay?: boolean
    startTime?: string
    endTime?: string
    kitchen: KitchenCreateNestedOneWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    color: string
    kitchenId: number
    isAvailableAllDay?: boolean
    startTime?: string
    endTime?: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type VariantCreateWithoutProductInput = {
    name: string
    price: number
  }

  export type VariantUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    price: number
  }

  export type VariantCreateOrConnectWithoutProductInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type ModifierCreateWithoutProductInput = {
    name: string
    price: number
  }

  export type ModifierUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    price: number
  }

  export type ModifierCreateOrConnectWithoutProductInput = {
    where: ModifierWhereUniqueInput
    create: XOR<ModifierCreateWithoutProductInput, ModifierUncheckedCreateWithoutProductInput>
  }

  export type CollectionUpsertWithoutProductsInput = {
    update: XOR<CollectionUpdateWithoutProductsInput, CollectionUncheckedUpdateWithoutProductsInput>
    create: XOR<CollectionCreateWithoutProductsInput, CollectionUncheckedCreateWithoutProductsInput>
  }

  export type CollectionUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isAvailableAllDay?: BoolFieldUpdateOperationsInput | boolean
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    kitchen?: KitchenUpdateOneRequiredWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    kitchenId?: IntFieldUpdateOperationsInput | number
    isAvailableAllDay?: BoolFieldUpdateOperationsInput | boolean
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type VariantUpsertWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    update: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantUpdateWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    data: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
  }

  export type VariantUpdateManyWithWhereWithoutProductInput = {
    where: VariantScalarWhereInput
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyWithoutVariantInput>
  }

  export type VariantScalarWhereInput = {
    AND?: Enumerable<VariantScalarWhereInput>
    OR?: Enumerable<VariantScalarWhereInput>
    NOT?: Enumerable<VariantScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    price?: FloatFilter | number
    productId?: IntFilter | number
  }

  export type ModifierUpsertWithWhereUniqueWithoutProductInput = {
    where: ModifierWhereUniqueInput
    update: XOR<ModifierUpdateWithoutProductInput, ModifierUncheckedUpdateWithoutProductInput>
    create: XOR<ModifierCreateWithoutProductInput, ModifierUncheckedCreateWithoutProductInput>
  }

  export type ModifierUpdateWithWhereUniqueWithoutProductInput = {
    where: ModifierWhereUniqueInput
    data: XOR<ModifierUpdateWithoutProductInput, ModifierUncheckedUpdateWithoutProductInput>
  }

  export type ModifierUpdateManyWithWhereWithoutProductInput = {
    where: ModifierScalarWhereInput
    data: XOR<ModifierUpdateManyMutationInput, ModifierUncheckedUpdateManyWithoutModifierInput>
  }

  export type ModifierScalarWhereInput = {
    AND?: Enumerable<ModifierScalarWhereInput>
    OR?: Enumerable<ModifierScalarWhereInput>
    NOT?: Enumerable<ModifierScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    price?: FloatFilter | number
    productId?: IntFilter | number
  }

  export type KitchenCreateWithoutCategoryInput = {
    name: string
    printer: string
  }

  export type KitchenUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    printer: string
  }

  export type KitchenCreateOrConnectWithoutCategoryInput = {
    where: KitchenWhereUniqueInput
    create: XOR<KitchenCreateWithoutCategoryInput, KitchenUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    secondaryLanguageName?: string | null
    arabic: string
    price: number
    cost: number
    image?: string
    inStock?: boolean
    hasVariant?: boolean
    hasModifiers?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isArchived?: boolean
    collection: CollectionCreateNestedOneWithoutProductsInput
    Variant?: VariantCreateNestedManyWithoutProductInput
    Modifier?: ModifierCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    secondaryLanguageName?: string | null
    arabic: string
    price: number
    cost: number
    image?: string
    inStock?: boolean
    hasVariant?: boolean
    hasModifiers?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isArchived?: boolean
    collectionId: number
    Variant?: VariantUncheckedCreateNestedManyWithoutProductInput
    Modifier?: ModifierUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type KitchenUpsertWithoutCategoryInput = {
    update: XOR<KitchenUpdateWithoutCategoryInput, KitchenUncheckedUpdateWithoutCategoryInput>
    create: XOR<KitchenCreateWithoutCategoryInput, KitchenUncheckedCreateWithoutCategoryInput>
  }

  export type KitchenUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    printer?: StringFieldUpdateOperationsInput | string
  }

  export type KitchenUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    printer?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductScalarWhereInput = {
    AND?: Enumerable<ProductScalarWhereInput>
    OR?: Enumerable<ProductScalarWhereInput>
    NOT?: Enumerable<ProductScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    secondaryLanguageName?: StringNullableFilter | string | null
    arabic?: StringFilter | string
    price?: FloatFilter | number
    cost?: FloatFilter | number
    image?: StringFilter | string
    inStock?: BoolFilter | boolean
    hasVariant?: BoolFilter | boolean
    hasModifiers?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isArchived?: BoolFilter | boolean
    collectionId?: IntFilter | number
    categoryId?: IntFilter | number
  }

  export type ProductCreateWithoutCollectionInput = {
    name: string
    secondaryLanguageName?: string | null
    arabic: string
    price: number
    cost: number
    image?: string
    inStock?: boolean
    hasVariant?: boolean
    hasModifiers?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isArchived?: boolean
    category: CategoryCreateNestedOneWithoutProductsInput
    Variant?: VariantCreateNestedManyWithoutProductInput
    Modifier?: ModifierCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCollectionInput = {
    id?: number
    name: string
    secondaryLanguageName?: string | null
    arabic: string
    price: number
    cost: number
    image?: string
    inStock?: boolean
    hasVariant?: boolean
    hasModifiers?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isArchived?: boolean
    categoryId: number
    Variant?: VariantUncheckedCreateNestedManyWithoutProductInput
    Modifier?: ModifierUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCollectionInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCollectionInput, ProductUncheckedCreateWithoutCollectionInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutCollectionInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCollectionInput, ProductUncheckedUpdateWithoutCollectionInput>
    create: XOR<ProductCreateWithoutCollectionInput, ProductUncheckedCreateWithoutCollectionInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCollectionInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCollectionInput, ProductUncheckedUpdateWithoutCollectionInput>
  }

  export type ProductUpdateManyWithWhereWithoutCollectionInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type CategoryCreateWithoutKitchenInput = {
    name: string
    color: string
    isAvailableAllDay?: boolean
    startTime?: string
    endTime?: string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutKitchenInput = {
    id?: number
    name: string
    color: string
    isAvailableAllDay?: boolean
    startTime?: string
    endTime?: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutKitchenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutKitchenInput, CategoryUncheckedCreateWithoutKitchenInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutKitchenInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutKitchenInput, CategoryUncheckedUpdateWithoutKitchenInput>
    create: XOR<CategoryCreateWithoutKitchenInput, CategoryUncheckedCreateWithoutKitchenInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutKitchenInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutKitchenInput, CategoryUncheckedUpdateWithoutKitchenInput>
  }

  export type CategoryUpdateManyWithWhereWithoutKitchenInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: Enumerable<CategoryScalarWhereInput>
    OR?: Enumerable<CategoryScalarWhereInput>
    NOT?: Enumerable<CategoryScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    color?: StringFilter | string
    kitchenId?: IntFilter | number
    isAvailableAllDay?: BoolFilter | boolean
    startTime?: StringFilter | string
    endTime?: StringFilter | string
  }

  export type ProductCreateWithoutVariantInput = {
    name: string
    secondaryLanguageName?: string | null
    arabic: string
    price: number
    cost: number
    image?: string
    inStock?: boolean
    hasVariant?: boolean
    hasModifiers?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isArchived?: boolean
    collection: CollectionCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    Modifier?: ModifierCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVariantInput = {
    id?: number
    name: string
    secondaryLanguageName?: string | null
    arabic: string
    price: number
    cost: number
    image?: string
    inStock?: boolean
    hasVariant?: boolean
    hasModifiers?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isArchived?: boolean
    collectionId: number
    categoryId: number
    Modifier?: ModifierUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVariantInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantInput, ProductUncheckedCreateWithoutVariantInput>
  }

  export type ProductUpsertWithoutVariantInput = {
    update: XOR<ProductUpdateWithoutVariantInput, ProductUncheckedUpdateWithoutVariantInput>
    create: XOR<ProductCreateWithoutVariantInput, ProductUncheckedCreateWithoutVariantInput>
  }

  export type ProductUpdateWithoutVariantInput = {
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    collection?: CollectionUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    Modifier?: ModifierUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    collectionId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    Modifier?: ModifierUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutModifierInput = {
    name: string
    secondaryLanguageName?: string | null
    arabic: string
    price: number
    cost: number
    image?: string
    inStock?: boolean
    hasVariant?: boolean
    hasModifiers?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isArchived?: boolean
    collection: CollectionCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    Variant?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutModifierInput = {
    id?: number
    name: string
    secondaryLanguageName?: string | null
    arabic: string
    price: number
    cost: number
    image?: string
    inStock?: boolean
    hasVariant?: boolean
    hasModifiers?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isArchived?: boolean
    collectionId: number
    categoryId: number
    Variant?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutModifierInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutModifierInput, ProductUncheckedCreateWithoutModifierInput>
  }

  export type ProductUpsertWithoutModifierInput = {
    update: XOR<ProductUpdateWithoutModifierInput, ProductUncheckedUpdateWithoutModifierInput>
    create: XOR<ProductCreateWithoutModifierInput, ProductUncheckedCreateWithoutModifierInput>
  }

  export type ProductUpdateWithoutModifierInput = {
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    collection?: CollectionUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    Variant?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    collectionId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    Variant?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrderItemCreateWithoutOrderInput = {
    name: string
    kotNumber: number
    User?: UserCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    name: string
    kotNumber: number
    userId?: number | null
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type UserCreateWithoutOrdersInput = {
    username: string
    password: number
    name?: string | null
    phone?: string | null
    isAdmin?: boolean
    isCashier?: boolean
    isWaiter?: boolean
    isKitchenUser?: boolean
    OrderItem?: OrderItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    username: string
    password: number
    name?: string | null
    phone?: string | null
    isAdmin?: boolean
    isCashier?: boolean
    isWaiter?: boolean
    isKitchenUser?: boolean
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderItemInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCashier?: BoolFieldUpdateOperationsInput | boolean
    isWaiter?: BoolFieldUpdateOperationsInput | boolean
    isKitchenUser?: BoolFieldUpdateOperationsInput | boolean
    OrderItem?: OrderItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCashier?: BoolFieldUpdateOperationsInput | boolean
    isWaiter?: BoolFieldUpdateOperationsInput | boolean
    isKitchenUser?: BoolFieldUpdateOperationsInput | boolean
    OrderItem?: OrderItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderCreateWithoutOrderItemInput = {
    orderNumber: number
    paymentStatus: string
    orderStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdUser: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOrderItemInput = {
    id?: number
    orderNumber: number
    paymentStatus: string
    orderStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type OrderCreateOrConnectWithoutOrderItemInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
  }

  export type UserCreateWithoutOrderItemInput = {
    username: string
    password: number
    name?: string | null
    phone?: string | null
    isAdmin?: boolean
    isCashier?: boolean
    isWaiter?: boolean
    isKitchenUser?: boolean
    orders?: OrderCreateNestedManyWithoutCreatedUserInput
  }

  export type UserUncheckedCreateWithoutOrderItemInput = {
    id?: number
    username: string
    password: number
    name?: string | null
    phone?: string | null
    isAdmin?: boolean
    isCashier?: boolean
    isWaiter?: boolean
    isKitchenUser?: boolean
    orders?: OrderUncheckedCreateNestedManyWithoutCreatedUserInput
  }

  export type UserCreateOrConnectWithoutOrderItemInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderItemInput, UserUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderUpsertWithoutOrderItemInput = {
    update: XOR<OrderUpdateWithoutOrderItemInput, OrderUncheckedUpdateWithoutOrderItemInput>
    create: XOR<OrderCreateWithoutOrderItemInput, OrderUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderUpdateWithoutOrderItemInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUser?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutOrderItemInput = {
    update: XOR<UserUpdateWithoutOrderItemInput, UserUncheckedUpdateWithoutOrderItemInput>
    create: XOR<UserCreateWithoutOrderItemInput, UserUncheckedCreateWithoutOrderItemInput>
  }

  export type UserUpdateWithoutOrderItemInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCashier?: BoolFieldUpdateOperationsInput | boolean
    isWaiter?: BoolFieldUpdateOperationsInput | boolean
    isKitchenUser?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCashier?: BoolFieldUpdateOperationsInput | boolean
    isWaiter?: BoolFieldUpdateOperationsInput | boolean
    isKitchenUser?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUncheckedUpdateManyWithoutCreatedUserNestedInput
  }

  export type TaxCreateWithoutCompanyInput = {
    name: string
    printName: string
    isPercentage?: boolean
    value: number
  }

  export type TaxUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    printName: string
    isPercentage?: boolean
    value: number
  }

  export type TaxCreateOrConnectWithoutCompanyInput = {
    where: TaxWhereUniqueInput
    create: XOR<TaxCreateWithoutCompanyInput, TaxUncheckedCreateWithoutCompanyInput>
  }

  export type TaxUpsertWithWhereUniqueWithoutCompanyInput = {
    where: TaxWhereUniqueInput
    update: XOR<TaxUpdateWithoutCompanyInput, TaxUncheckedUpdateWithoutCompanyInput>
    create: XOR<TaxCreateWithoutCompanyInput, TaxUncheckedCreateWithoutCompanyInput>
  }

  export type TaxUpdateWithWhereUniqueWithoutCompanyInput = {
    where: TaxWhereUniqueInput
    data: XOR<TaxUpdateWithoutCompanyInput, TaxUncheckedUpdateWithoutCompanyInput>
  }

  export type TaxUpdateManyWithWhereWithoutCompanyInput = {
    where: TaxScalarWhereInput
    data: XOR<TaxUpdateManyMutationInput, TaxUncheckedUpdateManyWithoutTaxesInput>
  }

  export type TaxScalarWhereInput = {
    AND?: Enumerable<TaxScalarWhereInput>
    OR?: Enumerable<TaxScalarWhereInput>
    NOT?: Enumerable<TaxScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    printName?: StringFilter | string
    isPercentage?: BoolFilter | boolean
    value?: FloatFilter | number
    companyId?: IntNullableFilter | number | null
  }

  export type CompanyCreateWithoutTaxesInput = {
    name: string
    arabic: string
    logoUrl: string
    lastOrderNumber: number
    caption: string
    footer: string
    currencyCode: string
    address: string
    lat?: string | null
    long?: string | null
  }

  export type CompanyUncheckedCreateWithoutTaxesInput = {
    id?: number
    name: string
    arabic: string
    logoUrl: string
    lastOrderNumber: number
    caption: string
    footer: string
    currencyCode: string
    address: string
    lat?: string | null
    long?: string | null
  }

  export type CompanyCreateOrConnectWithoutTaxesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTaxesInput, CompanyUncheckedCreateWithoutTaxesInput>
  }

  export type CompanyUpsertWithoutTaxesInput = {
    update: XOR<CompanyUpdateWithoutTaxesInput, CompanyUncheckedUpdateWithoutTaxesInput>
    create: XOR<CompanyCreateWithoutTaxesInput, CompanyUncheckedCreateWithoutTaxesInput>
  }

  export type CompanyUpdateWithoutTaxesInput = {
    name?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    lastOrderNumber?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    footer?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    long?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUncheckedUpdateWithoutTaxesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arabic?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    lastOrderNumber?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    footer?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    long?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutCreatedUserInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderItem?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCreatedUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderItem?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    orderStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    kotNumber?: IntFieldUpdateOperationsInput | number
    Order?: OrderUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    kotNumber?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    kotNumber?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type VariantUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type VariantUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type VariantUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ModifierUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ModifierUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ModifierUncheckedUpdateManyWithoutModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    collection?: CollectionUpdateOneRequiredWithoutProductsNestedInput
    Variant?: VariantUpdateManyWithoutProductNestedInput
    Modifier?: ModifierUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    collectionId?: IntFieldUpdateOperationsInput | number
    Variant?: VariantUncheckedUpdateManyWithoutProductNestedInput
    Modifier?: ModifierUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    collectionId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpdateWithoutCollectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    Variant?: VariantUpdateManyWithoutProductNestedInput
    Modifier?: ModifierUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCollectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    secondaryLanguageName?: NullableStringFieldUpdateOperationsInput | string | null
    arabic?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    inStock?: BoolFieldUpdateOperationsInput | boolean
    hasVariant?: BoolFieldUpdateOperationsInput | boolean
    hasModifiers?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: IntFieldUpdateOperationsInput | number
    Variant?: VariantUncheckedUpdateManyWithoutProductNestedInput
    Modifier?: ModifierUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CategoryUpdateWithoutKitchenInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isAvailableAllDay?: BoolFieldUpdateOperationsInput | boolean
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutKitchenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isAvailableAllDay?: BoolFieldUpdateOperationsInput | boolean
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isAvailableAllDay?: BoolFieldUpdateOperationsInput | boolean
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    kotNumber?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    kotNumber?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaxUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    printName?: StringFieldUpdateOperationsInput | string
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    printName?: StringFieldUpdateOperationsInput | string
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxUncheckedUpdateManyWithoutTaxesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    printName?: StringFieldUpdateOperationsInput | string
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    value?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}