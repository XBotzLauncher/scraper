const ytsearch = require('../script/youtubesearch.js');

(async () => {
  const query = `mrbeast`;
  try {
    const data = await ytsearch(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()