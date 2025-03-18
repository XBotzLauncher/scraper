const mcpedlSearch = require('../script/mcpedlsearch.js');

(async () => {
  const query = `superhero`;
  try {
    const data = await mcpedlSearch(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()