const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeAdikFilm(query) {
  const data = await axios.get(`https://adikfilm.click/tv/cars-on-the-road-2022/`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
  })
}

// Contoh penggunaan
(async () => {
    const data = await scrapeAdikFilm('cars');
    console.log(data);
})();