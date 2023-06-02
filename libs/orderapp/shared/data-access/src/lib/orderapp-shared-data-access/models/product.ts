export interface Category {
  id: number;
  menuId?: string;
  accountId?: string;
  name: string;
  description?: string;
  archived: boolean;
  products?: Product[] | null;
  alwaysOpen: boolean;
  day?: null;
  openTime?: null;
  closeTime?: null;
  openAllDay?: null;
  hours?: null[] | null;
  adminIndex?: number;
  code?: number;
}
export interface Product {
  _id: string;
  name: string;
  secondaryLanguageName?: string;
  description?: string;
  price: number;
  cost?: number;
  image: string;
  inStock?: boolean;
  hasVariant?: boolean;
  hasModifiers?: boolean;
  isArchived?: boolean;
  isAvailable?: boolean;
  onSale?: boolean;
  categoryId?: number;
  archived: boolean;
  video?: string;
  popular?: boolean;
  printName?: string;
  modifierGroups?: ModifierGroupsEntity[] | null;
  indexInCategory?: number;

  quickDisplayOrder?: number;
}

export interface ProductImage {
  storageName: string;
  downloadUrl: string;
}
export interface ModifierGroupsEntity {
  id?: string;
  description?: string;
  price?: number;
  image?: string;
  created_at?: string;
  updated_at?: string;
  printName?: string;
  printModifiersAsItems?: boolean;
  modifiers?: Modifier[];
}

export interface Modifier {
  description: string;
  price: number;
  id?: number;
}

type ModifierProductEntity = Omit<Product, 'modifierGroups'>;
export type CategoryViseProducts = { [Key: string]: Product[] };

export interface ProductSortData {
  _id: string;
  indexInCategory: number;
}

export interface ProductBoolFieldUpdateData {
  _id: string;
  fieldName: string;
  value: boolean;
}
