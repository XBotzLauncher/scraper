const themovD = require('../script/movedetail.js');

(async () => {
  const url = 'https://www.themoviedb.org/tv/122665';
  try {
    const data = await themovD(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()