import { Injectable } from '@nestjs/common';
import { resolve } from 'path';

import { print } from 'pdf-to-printer';

@Injectable()
export class PrintService {
  async printPdfAtPath(path: string, printerName: string) {
    try {
      // awaiting printer will make the progress stop
      // until printer comes back online in the case of printer being offline.
      // to give enough time to read the pdf before it gets deleted.. adding an artifical delay

      const result = await this.printDoc(
        print(resolve(__dirname, path), {
          printer: printerName, //'CP-Q2',
        }),
        3000
      );
      // await print(resolve(__dirname, path), {
      //   printer: printerName, //'CP-Q2',
      // });

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async printDoc(asyncPromise: Promise<any>, timeLimit: number) {
    let timeoutHandle: any;

    const timeoutPromise = new Promise((_resolve, reject) => {
      timeoutHandle = setTimeout(
        () => reject(new Error('Async call timeout limit reached')),
        timeLimit
      );
    });

    return Promise.race([asyncPromise, timeoutPromise]).then((result) => {
      clearTimeout(timeoutHandle);
      return result;
    });
  }
}
