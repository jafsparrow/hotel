// import { JwtAuthGuard } from '@jafar-tech/backend/auth';
import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Patch,
  Post,
  Put,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
// import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
// // import { Express } from 'express';
// // import * as multeri from 'multer';

// import { CreateProductDto } from './dto/create-product-dto';
// import { PatchProductIndexDto } from './dto/patch-porduct.dto';
// import { ProductBoolFieldDto } from './dto/product-bool-field-update.dto';
import { ProductService } from './products.service';
import { JwtAuthGuard, LocalAuthGuard } from '@hotel/api/feature-auth';
import { CreateProductDto } from './dto/create-product-dto';

@Controller('product')
export class ApiFeatureProductController {
  constructor(private productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get('list')
  getProducts() {
    console.log('get product api end point');
    return this.productService.getProduct();
  }

  @Post()
  createProduct(@Body() params: CreateProductDto) {
    return this.productService.createProduct(params);
  }

  @Put(':id')
  updateProduct(@Body() body: CreateProductDto, @Param('id') id: any) {
    const productId = +id;
    console.log('Product id', productId);
    return this.productService.udpateProduct(productId, body);
  }
  // @UseGuards(JwtAuthGuard)
  // @Post()
  // createProduct(@Body() product: CreateProductDto, @Req() req) {
  //   console.log('create product called');
  //   let companyId = req.user.companyId;
  //   return this.productService.createProduct(companyId, product);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Patch(':id')
  // updateProduct(
  //   @Body() product: CreateProductDto,
  //   @Req() req,
  //   @Param('id') productId: string
  // ) {
  //   let companyId = req.user.companyId;
  //   return this.productService.updateProduct(companyId, productId, product);
  // }

  // @Patch()
  // updateProductOrder(@Body() data: PatchProductIndexDto[], @Req() req) {
  //   // console.log(data);
  //   let companyId = req.user.companyId;
  //   return this.productService.updateProductsIndex(companyId, data);
  // }

  // @Put(':id')
  // updateProductInfo(
  //   @Body() data: ProductBoolFieldDto,

  //   @Req() req,
  //   @Param('id') productId: string
  // ) {
  //   let companyId = req.user.companyId;
  //   return this.productService.updateProductInfo(productId, companyId, data);
  // }

  // @Post('upload')
  // @UseInterceptors(
  //   FilesInterceptor('files', 3, {
  //     storage: multeri.diskStorage({
  //       destination: './files',
  //       filename: function (req, file, cb) {
  //         const uniqueSuffix =
  //           Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         cb(
  //           null,
  //           file.fieldname + '-' + uniqueSuffix + '.' + file.originalname
  //         );
  //       },
  //     }),
  //   })
  // )
  // uploadFile(
  //   @UploadedFiles()
  //   files: any
  // ) {
  //   let companyId = '643074dde7d1634c7e61a595';
  //   let productId = '643216007ac7638842fa4c89';
  //   this.productService.updateProductImage(companyId, productId, files[0]);
  //   // console.log('upload route');
  //   // console.log(files);
  // }

  // @Delete('image')
  // deleteProductImage(@Param('id') image, @Req() req) {
  //   // const companyId = req.user.companyId;
  //   // console.log(image);
  //   return 'hello bro' + image;
  //   return this.productService.deleteProductImage(image);
  // }
}

// FilesInterceptor('files', 3, {
//   storage: multeri.diskStorage({

//     filename: function (req, file, cb) {
//       const uniqueSuffix =
//         Date.now() + '-' + Math.round(Math.random() * 1e9);
//       cb(
//         null,
//         file.fieldname +
//           '-' +
//           uniqueSuffix +
//           '.' +
//           file.originalname
//       );
//     },
//   }),
// })
