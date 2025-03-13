const qrcode = require('qrcode')
const cheerio = require('cheerio')
const moment = require('moment-timezone')

class Saweria {
   constructor(user_id) {
      this.user_id = user_id;
      this.baseUrl = 'https://saweria.co';
      this.apiUrl = 'https://backend.saweria.co';
   }

   async login(email, password) {
      try {
         const response = await fetch(`${this.apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               email,
               password
            }),
         });

         const { data } = await response.json();

         if (!data || !data.id) {
            return {
               status: false,
               msg: 'Failed to login'
            };
         }

         return {
            status: true,
            data: {
               user_id: data.id
            }
         };
      } catch (error) {
         console.log(error);
         return {
            status: false,
            msg: error.message
         };
      }
   }

   async createPayment(amount, msg = 'Donate') {
      try {
         if (!this.user_id) {
            return {
               status: false,
               msg: 'User id not found'
            };
         }

         const response = await fetch(`${this.apiUrl}/donations/${this.user_id}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               agree: true,
               amount: Number(amount),
               customer_info: {
                  first_name: 'donator-rynn',
                  email: "donator-rynn@gmail.com",
                  phone: '',
               },
               message: msg,
               notUnderAge: true,
               payment_type: 'qris',
               vote: ''
            }),
         });

         const { data } = await response.json();

         if (!data || !data.id) {
            return {
               status: false,
               msg: 'Failed to create payment'
            };
         }

         const qr_string = data.qr_string;
         const qr_image = await qrcode.toDataURL(qr_string, {
            scale: 8
         });

         return {
            status: true,
            data: {
               amount: data.amount,
               currency: data.currency,
               payment_type: data.payment_type,
               message: data.message,
               id: data.id,
               status: data.status,
               type: data.type,
               etc: data.etc,
               created_at: moment(data.created_at).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm'),
               expired_at: moment(data.created_at).add(10, 'minutes').tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm'),
               receipt: `${this.baseUrl}/qris/${data.id}`,
               qr_image: qr_image
            }
         };
      } catch (error) {
         console.log(error);
         return {
            status: false,
            msg: error.message
         };
      }
   }

   async checkPayment(id) {
      try {
         if (!this.user_id) {
            return {
               status: false,
               msg: 'User id not found'
            };
         }

         const response = await fetch(`${this.baseUrl}/receipt/${id}`, {
            method: 'GET',
            headers: {
               "Accept": "*/*"
            },
         });

         const text = await response.text();
         const $ = cheerio.load(text);
         const msg = $('h2.chakra-heading.css-14dtuui').text();

         if (!msg) {
            return {
               status: false,
               msg: 'Transaction not found or not completed'
            };
         }

         const status = msg === 'OA4xSN';
         return {
            status,
            msg: msg.toUpperCase()
         };
      } catch (error) {
         console.log(error);
         return {
            status: false,
            msg: error.message
         };
      }
   }
}

module.exports = { Saweria };