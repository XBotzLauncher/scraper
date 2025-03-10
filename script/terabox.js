const axios = require('axios')

async function terabox(url) {
  const terabox = {
    api: {
      base: "https://teraboxdl.site/api/",
      token: "token",
      terabox: "terabox"
    },
    headers: {
      'authority': 'teraboxdl.site',
      'user-agent': 'Postify/1.0.0'
    },
    token: null
  }

  const getToken = async () => {
    if (terabox.token) return terabox.token

    try {
      const { data } = await axios.get(`${terabox.api.base}${terabox.api.token}`, { headers: terabox.headers })

      terabox.token = data.token
      return terabox.token

    } catch (err) {
      throw Error(err.message)
    }
  }

  const isUrl = (url) => {
    const match = url.match(/https?:\/\/(?:www\.)?(?:\w+)\.(com|app)\/s\/([^\/]+)/i)
    return match ? `https://1024terabox.com/s/${match[2]}` : null
  }

  const request = async (endpoint, params = {}) => {
    const token = await getToken()
    const url = `${terabox.api.base}${endpoint}?` + new URLSearchParams(params)

    try {
      const { data } = await axios.get(url, { headers: { ...terabox.headers, 'x-access-token': token } })
      const fileData = data.data.all_files[0]

      return {
        file_name: fileData.file_name,
        file_id: fileData.fs_id,
        size: fileData.size,
        thumbnail: fileData.thumb,
        download: fileData.download_url,
        bytes: fileData.sizebytes
      }

    } catch (err) {
      throw Error(err.message)
    }
  }

  const linkNya = isUrl(url.trim())
  return await request(terabox.api.terabox, { url: linkNya })
}

module.exports = terabox