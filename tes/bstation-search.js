const getBsTation = require('../script/bstation-search.js');

(async () => {
  const query = `family X spy`;
  try {
    const data = await getBsTation(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()