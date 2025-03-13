const Hoshino = require('../script/hoshino-ai.js');

(async () => {
  const query = `hai`;
  try {
    const data = await Hoshino(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()