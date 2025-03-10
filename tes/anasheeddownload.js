const { getAnasheed } = require('../script/anasheeddownload.js');

(async () => {
  const url = `https://www.anasheed.info/687/%D8%AA%D9%88%D9%83%D9%84%D8%AA-%D9%81%D9%8A-%D8%B1%D8%B2%D9%82%D9%8A-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%84%D9%87-%D8%AE%D8%A7%D9%84%D9%82%D9%8A---%D8%A7%D8%B0%D8%A7-%D8%A7%D9%84%D9%85%D8%B1%D8%A1-%D9%84%D8%A7-%D9%8A%D8%B1%D8%B9%D8%A7%D9%83-%D8%A7%D9%84%D8%A7-%D8%AA%D9%83%D9%84%D9%81`;
  try {
    const data = await getAnasheed(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()