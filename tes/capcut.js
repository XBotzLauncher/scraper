const capcut = require('../script/capcut.js');

(async () => {
  const url = `https://www.capcut.com/t/Zs8yqu3MS/`;
  try {
    const data = await capcut(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()