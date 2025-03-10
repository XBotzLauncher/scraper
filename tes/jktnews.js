const jktNews = require('../script/jktnews.js');

(async () => {
  try {
    const data = await jktNews();
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()