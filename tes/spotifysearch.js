const fetchSearch = require('../script/spotifysearch.js');

(async () => {
  const query = `erika`;
  try {
    const data = await fetchSearch(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()