import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Get()
  getCategory() {
    return this.categoryService.getCategory();
  }

  @Post()
  createCategory(@Body() params: CreateCategoryDto) {
    return this.categoryService.createCategory(params);
  }

  @Put(':id')
  updateKitchen(@Body() body: CreateCategoryDto, @Param('id') id: any) {
    const cateogryId = +id;
    console.log('kitchen id', cateogryId);
    return this.categoryService.udpateCategory(cateogryId, body);
  }
}
