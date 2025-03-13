const axios = require('axios')
const FormData = require('form-data')

async function deepSeekCoder(question) {
      let d = new FormData();
      d.append("content", `User: ${question}`);
      d.append("model", "@hf/thebloke/deepseek-coder-6.7b-instruct-awq");
      
      let head = {
         headers: {
            ...d.getHeaders()
         }
      };
      
      let { data: ak } = await axios.post("https://mind.hydrooo.web.id/v1/chat", d, head);
      
      return ak.result;
}

module.exports = deepSeekCoder