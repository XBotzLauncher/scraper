const twitter = require('../script/twitter.js');

(async () => {
  const url = `https://x.com/elonmusk/status/1898503702228472072`;
  try {
    const data = await twitter(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()