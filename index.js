const Datastore = require('nedb');

const database = new Datastore('database.db');

database.loadDatabase();

let webArray = ['https://www.bbc.co.uk/sport/football', 'https://www.bbc.co.uk/news', 'https://www.bbc.co.uk/weather'];

let website = webArray[Math.floor(Math.random() * webArray.length)];

database.insert({webpageVisit : website})
window.location.replace(website);
