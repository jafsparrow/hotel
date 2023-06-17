import { Injectable } from '@nestjs/common';
import { resolve } from 'path';

import { print } from 'pdf-to-printer';

@Injectable()
export class PrintService {
  async printPdfAtPath(path: string, printerName: string) {
    try {
      await print(resolve(__dirname, path), {
        printer: printerName, //'CP-Q2',
      });
    } catch (error) {
      console.log(error);
    }
  }
}
