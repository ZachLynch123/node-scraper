const fs = require('fs');
const got = require('got');
const cheerio = require('cheerio');


const vgmUrl = 'https://www.vgmusic.com/music/console/nintendo/nes';



got(vgmUrl)
.then(res => {
    const $ = cheerio.load(res.body);
    $('a').each((index, link) => {
        const href = link.attribs.href;
        console.log(href);
    });
})
.catch(e => {
    console.log(e);
})










