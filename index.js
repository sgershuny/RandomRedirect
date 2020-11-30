let webArray = ['https://www.bbc.co.uk/sport/football', 'https://www.bbc.co.uk/news', 'https://www.bbc.co.uk/weather'];

let website = webArray[Math.floor(Math.random() * webArray.length)];
console.log(website)
window.location.replace(website);
