const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 480,
    deviceScaleFactor: 1,
  });
  await page.goto('http://ec2-54-183-237-253.us-west-1.compute.amazonaws.com/1/');
  await page.click('.app__rightButton--3TCMp');
  await page.click('.app__heartIcon--2Baru');
  await page.screenshot({path: 'screenshots/example.png'});

  await browser.close();
})();