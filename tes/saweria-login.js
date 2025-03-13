const { Saweria } = require('../script/saweria.js')

(async () => {
  const pay = new Saweria();
  const log = await pay.login('xxx@gmail.com', 'passwd')
  console.log(log)
})()