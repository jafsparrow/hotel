import { IsNotEmpty, IsOptional, isString, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsOptional()
  image!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsOptional()
  isAvailable!: boolean;

  @IsOptional()
  onSale!: boolean;

  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  cost!: number;

  @IsNotEmpty()
  @IsString()
  name!: string;

  categoryId!: number;

  collectionId!: number;
  code!: number;
  qwickViewOrder!: number;
  @IsOptional()
  archived!: boolean;

  @IsOptional()
  video?: string;

  @IsOptional()
  popular!: boolean;

  @IsString()
  @IsOptional()
  printName?: string;
}

export class Modifiers {
  description?: string;
  printName?: string;
  printModifiersAsItems?: boolean;
  modifiers?: Modifier[];
}

export interface Modifier {
  description: string;
  price: number;
  id?: number;
}
