import { readFileSync, unlink } from 'fs';
import { join, resolve } from 'path';
import { Browser, PDFOptions, Page, launch } from 'puppeteer';

import { handlebars } from 'hbs';

export const deletePdf = (path: string) => {
  unlink(path, () => {
    console.log('file has been delete from : ', path);
  });
};

export const getPdfOptionsForReciept = (folderName: string, name: string) => {
  const pdfPath = createPdfPath(folderName, name);
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
};

export const createPdfPath = (folderName: string, name: string) => {
  const miliss = new Date();
  const folder = folderName ? folderName : 'pdf';
  const milis = miliss.getTime();
  const relativePath = resolve(__dirname, `../../../../${folder}`);
  const pdfPath = join(relativePath, `${name}-${milis}.pdf`);
  return pdfPath;
};

export const createHtmlDoc = (
  templateName: string,
  inputData: any,
  templateFolder: string
) => {
  const templateFolderName = templateFolder ? templateFolder : 'views';
  const relativePath = resolve(__dirname, templateFolderName);
  console.log(join(relativePath, templateName));
  const templateHtml = readFileSync(join(relativePath, templateName), 'utf8');
  const template = handlebars.compile(templateHtml);
  if (inputData) return template(inputData);
  return template({});
};

export const createBrowser = async () => {
  const browser = await launch({
    args: [
      '--no-sandbox',
      '--disable-features=IsolateOrigins',
      '--disable-site-isolation-trials',
      '--autoplay-policy=user-gesture-required',
      '--disable-background-networking',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-breakpad',
      '--disable-client-side-phishing-detection',
      '--disable-component-update',
      '--disable-default-apps',
      '--disable-dev-shm-usage',
      '--disable-domain-reliability',
      '--disable-extensions',
      '--disable-features=AudioServiceOutOfProcess',
      '--disable-hang-monitor',
      '--disable-ipc-flooding-protection',
      '--disable-notifications',
      '--disable-offer-store-unmasked-wallet-cards',
      '--disable-popup-blocking',
      '--disable-print-preview',
      '--disable-prompt-on-repost',
      '--disable-renderer-backgrounding',
      '--disable-setuid-sandbox',
      '--disable-speech-api',
      '--disable-sync',
      '--hide-scrollbars',
      '--ignore-gpu-blacklist',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-default-browser-check',
      '--no-first-run',
      '--no-pings',
      '--no-zygote',
      '--password-store=basic',
      '--use-gl=swiftshader',
      '--use-mock-keychain',
    ],
    headless: 'new',
  });

  return browser;
};

export const setupHtmlPage = async (html: any, browser: Browser) => {
  const page = await browser.newPage();

  // await page.goto(`data:text/html;charset=UTF-8,${html}`, {
  //   waitUntil: 'networkidle0',
  // });
  await page.setContent(html, {
    waitUntil: ['domcontentloaded', 'load', 'networkidle0'],
  });

  return page;
};

export const getPaddedDocHeight = async (padding: number, page: Page) => {
  const height = await page.evaluate(
    () => document.documentElement.offsetHeight
  );
  // console.log('page goto method..', await page.content());
  // height auto was the right fix for the page cut of pdf
  // generated for longer bill.
  const extrapaddedHeight = height + padding;
  return extrapaddedHeight;
};
