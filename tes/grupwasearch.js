const cariGC = require('../script/grupwasearch.js');

(async () => {
  const query = `jb`;
  try {
    const data = await cariGC(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()