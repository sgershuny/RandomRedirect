//window.location.replace("http://www.w3schools.com");
console.log("found DA page")

let randomValue = myArray[Math.floor(Math.random() * myArray.length)];
let webArray = ['https://www.bbc.co.uk/sport/football', 'https://www.bbc.co.uk/news', 'https://www.bbc.co.uk/weather'];

let website = webArray[Math.floor(Math.random() * myShows.length)];

window.location.replace(website);
