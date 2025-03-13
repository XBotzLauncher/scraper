const axios = require("axios");
const FormData = require("form-data");

async function gemini(question) {
      let d = new FormData();
      d.append("content", `User: ${question}`);
      d.append("model", "@google/gemini-2.0-flash-exp");
      
      let head = {
         headers: {
            ...d.getHeaders()
         }
      };
      
      let { data: ak } = await axios.post("https://mind.hydrooo.web.id/v1/chat", d, head);
      
      return ak.result;
   }

module.exports = gemini;