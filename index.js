//window.location.replace("http://www.w3schools.com");
console.log("found DA page")

let webArray = ['https://www.bbc.co.uk/sport/football', 'https://www.bbc.co.uk/news', 'https://www.bbc.co.uk/weather'];

let website = webArray[Math.floor(Math.random() * webArray.length)];

window.location.replace(website);
