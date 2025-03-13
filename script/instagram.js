const axios = require('axios')
const cheerio = require('cheerio')

async function igdl(url) {
  const { data } = await axios.post(
    'https://yt1s.io/api/ajaxSearch',
    new URLSearchParams({
      p: 'home',
      q: url,
      w: '',
      lang: 'en'
    }),
    {
      headers: {
        'User-Agent': 'Postify/1.0.0',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json, text/plain, */*',
        'Origin': 'https://yt1s.io',
        'Referer': 'https://yt1s.io/'
      }
    }
  )

  const $ = cheerio.load(data.data)

  return $('a.abutton.is-success.is-fullwidth.btn-premium')
    .map((_, el) => ({
      title: $(el).attr('title'),
      url: $(el).attr('href')
    }))
    .get()
}

module.exports = igdl