const igStalk = require('../script/instagramstalk.js');

(async () => {
  const user = `gamerxl_ofc`;
  try {
    const data = await igStalk(user);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()