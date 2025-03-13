const axios = require('axios')

async function cekrekening(accountNumber, provider) {
  let response = await axios.post(
    'https://cekrekening-api.belibayar.online/api/v1/account-inquiry', 
    {
      account_bank: provider, 
      account_number: accountNumber
    },
    {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'Referer': 'https://cekrekening.github.io/',
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data;
}

(async () => {
  const a = await cekrekening("083152603573", "gopay");
  console.log(a)
})()