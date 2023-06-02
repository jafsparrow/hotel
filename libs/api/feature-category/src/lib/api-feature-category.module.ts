import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [ApiDataAccessDbModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [],
})
export class ApiFeatureCategoryModule {}
