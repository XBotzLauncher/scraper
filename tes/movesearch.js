const movsearch = require('../script/movesearch.js');

(async () => {
  const query = `thorn`;
  try {
    const data = await movsearch(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()