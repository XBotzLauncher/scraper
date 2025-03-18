const text2img = require('../script/txt2img.js');

(async () => {
  const query = `gambarkan seorang pemuda yang mendaki gunung sumeru`;
  try {
    const data = await text2img(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()