const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const link = req.query.link;
  const puppeteer = require('puppeteer');

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link);
    await page.screenshot({ path: 'example.png' });

    await browser.close();
  })();
  var array = [link, 'exampleAnswer'];
  res.send({ link: array[0],
            answers: array[1] });
});

app.listen(8080, () => console.log('alive on localhost:8080'));
