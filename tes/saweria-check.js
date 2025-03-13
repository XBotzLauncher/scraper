const { Saweria } = require('../script/saweria.js')

(async () => {
  const pay = new Saweria();
  const log = await pay.checkPayment(payment_id);
  console.log(log)
})()