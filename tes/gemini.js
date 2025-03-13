const gemini = require('../script/gemini.js');

(async () => {
  const query = `hai`;
  try {
    const data = await gemini(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()