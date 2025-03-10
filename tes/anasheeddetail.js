const getAnasheedDetail = require('../script/anasheeddetail.js');

(async () => {
  const url = `https://www.anasheed.info/687/توكلت-في-رزقي-على-الله-خالقي---اذا-المرء-لا-يرعاك-الا-تكلف`;
  try {
    const data = await getAnasheedDetail(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()