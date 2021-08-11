const request = require('request');
const cheerio = require('cheerio');
const { log } = require('console');



request('https://webscraper.io/test-sites/e-commerce/static', (e, res, html) => {
    if (!e && res.statusCode === 200) {
        const $ = cheerio.load(html);
        const siteHeading = $('.navbar-brand');
        console.log(siteHeading.html());
    }
});


