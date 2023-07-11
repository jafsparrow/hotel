import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';

import { PrismaService } from '@hotel/api/data-access-db';
import { CreateProductDto } from './dto/create-product-dto';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}
  private products = PRODUCTS;

  async getProduct() {
    return await this.prismaService.product.findMany({
      include: {
        variants: true,
        modifierGroup: {
          include: {
            modifiers: true,
          },
        },
      },
    });
    // let products: Product[] = await this.productRepository.getProducts();

    // let categoryVice = {};

    // products.map((item) => {
    //   // if (categoryVice[item.category]) {
    //   //   categoryVice[item.category] = [...categoryVice[item.category], item];
    //   // } else {
    //   //   categoryVice[item.category] = [];
    //   // }

    //   categoryVice[item.category] = [
    //     ...(categoryVice[item.category] || []),
    //     item,
    //   ];
    // });

    // return categoryVice;
  }

  createProduct(data: CreateProductDto) {
    return this.prismaService.product.create({
      data: {
        ...data,
        price: +data.price,
        cost: +data.cost,
        code: +data.code,
        qwickViewOrder: +data.qwickViewOrder,
      },
    });
  }

  async udpateProduct(id: number, data: CreateProductDto) {
    try {
      return this.prismaService.product.update({
        where: { id },
        data: {
          ...data,
          price: +data.price,
          cost: +data.cost,
          code: +data.code,
          qwickViewOrder: +data.qwickViewOrder,
        },
      });
    } catch (error) {
      throw new BadRequestException({ error: error });
    }
  }
  // updateProductsIndex(companyId: string, data: PatchProductIndexDto[]) {
  //   return this.productRepository.bulkUpdate(companyId, data);
  // }

  // updateProductInfo(
  //   companyId: string,
  //   productId: string,
  //   data: ProductBoolFieldDto
  // ) {
  //   return this.productRepository.updateProductInfo(companyId, data);
  // }

  // async updateProductImage(
  //   companyId: string,
  //   productId: string,
  //   image: File | any
  // ) {
  //   const imageData = await this.imageService.uploadImageToFirebaseStorage(
  //     companyId,
  //     productId,
  //     image
  //   );
  //   return this.productRepository.updateProductImage(
  //     companyId,
  //     productId,
  //     imageData
  //   );
  // }

  // async deleteProductImage(imagePath: string) {
  //   //  add a check for the company id of the user to check the permission.

  //   imagePath =
  //     '643074dde7d1634c7e61a595/files-1681800710560-114757958.testiamge.jpg';
  //   return this.imageService.deleteImageFromFirebaseStorage(imagePath);
  // }

  // updateProduct(companyId: string, productId: string, data: CreateProductDto) {
  //   return this.productRepository.updateProduct(companyId, productId, data);
  // }
}

export const PRODUCTS = [
  {
    id: 11,
    name: 'Caffe Latte',
    price: 33,
    type: 'juice',
    image: '',
    description: 'its an amazing splend',
    isActive: true,
  },
  {
    id: 12,
    name: 'Mocko creepo',
    price: 33,
    type: 'juice',
    image: '',
    description: 'Juice mix ss splend',
    isActive: true,
  },
];

// async uploadImage(
//   companyId: string,
//   productId: string,
//   image: File | any
// ): Promise<string> {
//   // upload.
//   // clean up the folder.
//   // create the download signedURl
//   // store that to mongodb.

//   let downloadUrlPath: '';
//   try {
//     const response = await admin
//       .storage()
//       .bucket()
//       .upload(image.path, {
//         destination: `${companyId}/${image.filename}`,

//         // encryptionKey: '60473000-5e71-49a1-b6da-cc5346483bae',
//       });

//     // once uploaded delete the local file as it increases the disk memory usage.
//     fs.unlink(image.path, (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//     });
//     console.log(response[1]);

//     // const useBucked = await response[0].bucket.getSignedUrl({
//     //   action: 'list',
//     //   expires: '01-01-2030',
//     // });

//     const useBucked = await admin
//       .storage()
//       .bucket()
//       .file(response[1].name)
//       .getSignedUrl({
//         action: 'read',
//         expires: '01-01-2030',
//       });

//     console.log(useBucked);
//   } catch (error) {
//     console.log('something wrong happened while upload the image.', error);
//     throw new RequestTimeoutException('Fiailed to upload to storage.');
//   }

//   return downloadUrlPath;

//   // const storeage = admin
//   //   .storage()
//   //   .bucket()
//   //   .file('jafy.png', { encryptionKey: image })
//   //   .save(image);
//   // console.log(storeage);
// }
// }
