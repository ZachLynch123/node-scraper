const fs = require('fs');
const got = require('got');
const cheerio = require('cheerio');


const vgmUrl = 'https://www.vgmusic.com/music/console/nintendo/nes';



got(vgmUrl)
.then(res => {
    const $ = cheerio.load(res.body);
    $('a').filter(isMusic).filter(noRemixOrDuplicate).each((i, link) => {
        const href = link.attribs.href;
        console.log(href);
    });
})
.catch(e => {
    console.log(e);
})


const isMusic = (i, link) => {
    // returns false if the link doesn't link to a .mid file
    if (typeof link.attribs.href === 'undefined') {
        return false
    }
    return link.attribs.href.includes('.mid');
};

const noRemixOrDuplicate = (i, link) => {
    // Regex to see if song title hs paretheses
    const parenRegex = /^((?!\().)*$/;
    return parenRegex.test(link.children[0].data);
}









