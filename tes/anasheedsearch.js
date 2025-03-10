const searchAnasheed = require('../script/anasheedsearch.js');

(async () => {
  const query = `g`;
  try {
    const data = await searchAnasheed(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()