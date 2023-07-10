import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name!: string;
  @IsString()
  @IsOptional()
  color!: string;
  @IsNumber()
  kitchenId!: number;

  @IsNumber()
  categoryCode!: number;
  @IsOptional()
  startTime!: string;
  @IsOptional()
  endTime!: string;
}
