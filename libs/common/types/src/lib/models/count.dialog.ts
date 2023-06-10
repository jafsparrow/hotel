import { Product, Variant } from './product';

export interface CountSelectionDialogData {
  product: Product;
  selectedVariant?: Variant;
}
