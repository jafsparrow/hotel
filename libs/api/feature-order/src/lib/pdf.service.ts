import { Injectable } from '@nestjs/common';
import { readFileSync, unlink } from 'fs';
import { handlebars } from 'hbs';
import { join, resolve } from 'path';

import { Cart } from '@hotel/common/types';
import { PDFOptions, launch } from 'puppeteer';
import { Kitchen, Order, OrderItem, User } from '@prisma/client';
import { PrintService } from './print.service';

@Injectable()
export class PDFService {
  constructor(private printService: PrintService) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async printKot(
    kot: {
      createdAt: Date;
      id: number;
      updatedUser: User | null;
      Category: {
        kitchen: Kitchen;
      } | null;
      OrderItems: OrderItem[];
    },
    order: Order
  ) {
    const html = this.createHtml('KOT.html', kot, order);
    const pdfOptions = this.getPdfOptions('pdf', 'kot');
    await this.savePdf(html, pdfOptions);
    await this.printService.sendKOTtoPrint(
      pdfOptions.path!,
      kot.Category!.kitchen.printer
    );
  }
  private createHtml(
    templateName: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kot: {
      createdAt: Date;
      id: number;
      updatedUser: User | null;
      Category: {
        kitchen: Kitchen;
      } | null;
      OrderItems: OrderItem[];
    },
    order: Order
  ) {
    const updatedData = {
      restaurantName: 'Dawar Restaurant',
      kitchenName: 'MAIN',
      ticketId: `KOT- ${kot.id}`,
      billDate: kot.createdAt.toISOString(),
      tableNumber: order.customerName,
      waiterName: 'Jafar',
      orderItems: kot.OrderItems,
      numberOfItems: kot.OrderItems.length.toString() ?? '',
      quantity:
        kot.OrderItems.reduce(
          (prev, item) => prev + item.count,
          0
        ).toString() ?? '',
    };
    // const relativePath = resolve(__dirname, '../src/views');
    const relativePath = resolve(__dirname, 'views');
    console.log('relative path', relativePath);
    console.log(join(relativePath, templateName));
    const templateHtml = readFileSync(join(relativePath, templateName), 'utf8');
    const template = handlebars.compile(templateHtml);
    const html = template(updatedData);
    return html;
  }

  private getPdfOptions(folderName: string, name: string) {
    const miliss = new Date();

    const milis = miliss.getTime();
    const relativePath = resolve(__dirname, '../../../../pdf');
    // const pdfPath = join('pdf', `${name}-${milis}.pdf`);
    const pdfPath = join(relativePath, `${name}-${milis}.pdf`);
    console.log('pdf path', pdfPath);
    const options: PDFOptions = {
      width: '360',
      headerTemplate: '<p>header jafar</p>',
      footerTemplate: '<p>footer jafar</p>',
      displayHeaderFooter: true,
      margin: {
        top: '0px',
        bottom: '10px',
      },
      printBackground: false,
      path: pdfPath,
    };

    return options;
  }

  private async savePdf(html: any, options: PDFOptions) {
    const browser = await launch({
      args: ['--no-sandbox'],
      headless: 'new',
    });

    const page = await browser.newPage();

    // await page.goto(`data:text/html;charset=UTF-8,${html}`, {
    //   waitUntil: 'networkidle0',
    // });
    await page.setContent(html, {
      waitUntil: ['domcontentloaded', 'load', 'networkidle0'],
    });

    // console.log('page goto method..', await page.content());

    await page.pdf(options);
    await browser.close();
  }

  private deletePdf(path: string) {
    unlink(path, () => {
      console.log('file has been delete from : ', path);
    });
  }
}
