import { readFileSync, unlink } from 'fs';
import { join, resolve } from 'path';
import { Browser, PDFOptions, Page, launch } from 'puppeteer';

import { handlebars } from 'hbs';
import {
  createBrowser,
  createHtmlDoc,
  getPaddedDocHeight,
  getPdfOptionsForReciept,
  setupHtmlPage,
} from './puppeteer.util';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PuppeteerService {
  async getReportPdfStream(
    reportName: string,
    templatefolderName: string,
    outputFolderName: string,
    htmlName: string,
    inputData: any
  ) {
    // setup the html page.
    const html = createHtmlDoc(htmlName, inputData, templatefolderName);
    // setup pdf options.
    const pdfOptions = getPdfOptionsForReciept(outputFolderName, reportName);
    return this.getPdfStream(html, pdfOptions);
  }

  private async getPdfStream(html: any, options: PDFOptions) {
    const browser = await createBrowser();

    const page = await setupHtmlPage(html, browser);
    // to get only the buffer delete path from the pdfoptions\
    const udpatedPdfOptions = options;
    delete udpatedPdfOptions['path'];
    const pdfBuffer = await page.pdf(udpatedPdfOptions);
    await browser.close();
    return pdfBuffer;
  }

  private async savePdf(html: any, options: PDFOptions) {
    const browser = await createBrowser();

    const page = await setupHtmlPage(html, browser);
    const extrapaddedHeight = getPaddedDocHeight(100, page);
    await page.pdf({ ...options, height: extrapaddedHeight + 'px' });
    await browser.close();
  }

  getPdfOptions(folderName: string, name: string) {
    return getPdfOptionsForReciept(folderName, name);
  }
}
