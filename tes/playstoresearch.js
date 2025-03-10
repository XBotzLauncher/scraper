const PlayStore = require('../script/playstoresearch.js');

(async () => {
  const query = `carx street`;
  try {
    const data = await PlayStore(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()