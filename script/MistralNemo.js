const axios = require("axios");
const FormData = require("form-data");

async function mistralNemo(question) {
      let d = new FormData();
      d.append("content", `User: ${question}`);
      d.append("model", "@mistral/open-mistral-nemo");
      
      let head = {
         headers: {
            ...d.getHeaders()
         }
      };
      
      let { data: ak } = await axios.post("https://mind.hydrooo.web.id/v1/chat", d, head);
      
      return ak.result;
};

module.exports = mistralNemo;