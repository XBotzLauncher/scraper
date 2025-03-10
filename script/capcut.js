const axios = require('axios');
const cheerio = require('cheerio');

async function capcut(url) {
  const BASE_URI = "https://snapsave.cc/wp-json/aio-dl/video-data"
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Content-Type': 'application/json;charset=UTF-8',
    'Connection': 'keep-alive',
    'Referer': 'https://snapsave.cc/capcut-video-downloader/',
    'Origin': 'https://snapsave.cc',
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'DNT': '1'
  }

  try {
    const response = await axios.get(`https://snapsave.cc/capcut-video-downloader/#url=${encodeURIComponent(url)}`, { headers })
    const $ = cheerio.load(response.data)
    const token = $("#token").val()

    const payload = {
      url,
      token,
      hash: "aHR0cHM6Ly93d3cuY2FwY3V0LmNvbS9pZC1pZC90ZW1wbGF0ZS1kZXRhaWwvRm9yLXlvdS0vNzQxNDE2Mjk3MzU3ODU2MjgyMg==1073YWlvLWRs"
    }

    const { data: videoData } = await axios.post(BASE_URI, payload, { headers })

    return {
      title: videoData.title,
      thumbnail: videoData.thumbnail,
      source: videoData.source,
      media: videoData.medias.map((item) => ({
        url: item.url,
        quality: item.quality,
        format: item.extension,
        size: item.formattedSize
      }))
    }

  } catch (err) {
    throw Error(err.message)
  }
}

module.exports = capcut