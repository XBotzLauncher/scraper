const degree = require('../script/degreeai.js');

(async () => {
  const query = `hai`;
  try {
    const data = await degree(query);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()