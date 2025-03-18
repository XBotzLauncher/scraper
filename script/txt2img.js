const axios = require("axios");
const cheerio = require("cheerio");
const translate = require("bing-translate-api");

const BASE_URL = "https://www.texttoimage.org";

const headers = {
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  Origin: "https://www.texttoimage.org",
  Referer: "https://www.texttoimage.org/",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
};

async function text2img(prompt) {
  if (!prompt) return "Where is the prompt param?";
  const translatedText = await translate.translate(prompt, 'id', 'en');
  try {
    const text = `${translatedText.translation}`;
    console.log(translatedText.translation);
    let q = new URLSearchParams({
      text,
    });
    let { data } = await axios.post(`${BASE_URL}/generate`, q, {
      headers,
    });
    let html = await axios.get(`${BASE_URL}/${data.url}`, { headers });
    const $ = cheerio.load(html.data);
    let result = BASE_URL + $(".image-container").find("img").attr("src");
    return {
      status: true,
      result,
    };
  } catch (e) {
    return {
      status: false,
      result: "An error occurred! Server down."
    };
  }
}

module.exports = text2img;