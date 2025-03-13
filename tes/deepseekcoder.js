const deepSeekCoder = require('../script/deepseekcoder.js');

(async () => {
  const query = `hai`;
  try {
    const data = await deepSeekCoder(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()