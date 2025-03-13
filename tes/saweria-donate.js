const { Saweria } = require('../script/saweria.js')

(async () => {
  const user_id = ``;
  const pay = new Saweria(user_id);
  const log = await pay.createPayment(1000, 'Aku mw donate');
  console.log(log)
})()