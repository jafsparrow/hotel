import { unlink } from 'fs';
import { join, resolve } from 'path';
import { PDFOptions, launch } from 'puppeteer';

export const savePdf = async (html: any, options: PDFOptions) => {
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

  const page = await browser.newPage();

  // await page.goto(`data:text/html;charset=UTF-8,${html}`, {
  //   waitUntil: 'networkidle0',
  // });
  await page.setContent(html, {
    waitUntil: ['domcontentloaded', 'load', 'networkidle0'],
  });
  const height = await page.evaluate(
    () => document.documentElement.offsetHeight
  );
  // console.log('page goto method..', await page.content());
  // height auto was the right fix for the page cut of pdf
  // generated for longer bill.
  const extrapaddedHeight = height + 100;
  await page.pdf({ ...options, height: extrapaddedHeight + 'px' });
  await browser.close();
};

export const deletePdf = (path: string) => {
  unlink(path, () => {
    console.log('file has been delete from : ', path);
  });
};

export const getPdfOptions = (folderName: string, name: string) => {
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
