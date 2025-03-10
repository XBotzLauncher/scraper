const hmSearch = require('../script/hmsearch.js');

(async () => {
  const query = `carx street`;
  try {
    const data = await hmSearch(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()