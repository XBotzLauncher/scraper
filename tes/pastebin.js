const getPastebinSource = require('../script/pastebin.js');

(async () => {
  const pastebinUrl = "https://pastebin.com/Zb29twWc";
  try {
    const data = await getPastebinSource(pastebinUrl);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()