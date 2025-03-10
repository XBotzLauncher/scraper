const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function gdrive(url) {
  let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]

  let { data } = await axios.post(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, null, {
    headers: {
      'accept-encoding': 'gzip, deflate, br',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'origin': 'https://drive.google.com',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
      'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
      'x-drive-first-party': 'DriveWebUi',
      'x-json-requested': 'true'
    }
  })

  let { fileName, sizeBytes, downloadUrl } = JSON.parse(data.slice(4))

  return {
    download: downloadUrl,
    fileName,
    fileSize: `${(sizeBytes / (1024 * 1024)).toFixed(2)} MB`,
    mimetype: (await axios.head(downloadUrl)).headers['content-type'],
    extension: fileName.split('.').pop(),
    modified: (await axios.head(downloadUrl)).headers['last-modified']
  }
}

module.exports = gdrive