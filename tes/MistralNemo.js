const mistralNemo = require('../script/MistralNemo.js');

(async () => {
  const query = `hai`;
  try {
    const data = await mistralNemo(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()