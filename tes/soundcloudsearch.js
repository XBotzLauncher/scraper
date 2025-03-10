const scrapeSoundCloud = require('../script/soundcloudsearch.js');

(async () => {
  const query = `erika`;
  try {
    const data = await scrapeSoundCloud(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()