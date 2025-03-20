const drive = require('../script/gdrive.js');

(async () => {
  const url = `https://drive.google.com/file/d/1gaESnr00uRO14DDexwEczgxe_gmerPfN/view?usp=drivesdk`;
  try {
    const data = await drive(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()
