const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { Parser } = require('json2csv');
const fs = require('fs')


async function main() {
    const url = 'https://www.imdb.com/list/ls024149810/';
    const res = await axios.get(url);
    const dom = new JSDOM(res.data);
    const movieEls = dom.window.document.getElementsByClassName('lister-item mode-detail');
let movies = [];
for(movieEl of movieEls){
    const Name = movieEl.getElementsByClassName('lister-item-header')[0].textContent;
    const ReleaseDate = movieEl.getElementsByClassName('lister-item-year text-muted unbold')[0].textContent;
    const Genre = movieEl.getElementsByClassName('genre')[0].textContent;
    const Rating = movieEl.getElementsByClassName('ipl-rating-star__rating')[0].textContent;
movies.push({
    Name: Name.replace(/\n/g,'').replace(/ /g,''),
    Rating: Rating.replace(/\n/g,'').replace(/ /g,''),
    Genre: Genre.replace(/\n/g,'').replace(),
    ReleaseDate: ReleaseDate
}); 
}
const parser = new Parser({fields:['Name','ReleaseDate','Genre','Rating']});
const csv =parser.parse(movies);
fs.writeFileSync('./movies.csv',csv)
}
 main();