const axios = require('axios');

async function twitter(url) {
    try {
        const res = await axios.post('https://api.snapfirecdn.com/twitter', { target: url, gsc: 'HFMms5IRIYTm1cFX4MHEEdHQd5XwVkJWN0Sj9pahFfMRdcfhVxVVt2NmElAjAQPkd5QBh5W0RRVhhCZQYxeA0yIFMpK3FXVBpYU1dQbXg5NjxxDkVmCnwFdBIRLQ9KNU8WXitUXDYuLiNHJFVmTVp5O38COXQGFDZFQHISPV8iOzNWVilKVhg7Qwd5LgVkVGJwP0kzDEUtNUApEkltEV0ZNBIEHTE6BllvJGw5MEMtRXwiEXM_B0l0IRAWAzYTIRwHK2UHDXN-bA5vFnBhEn8ydQUuM3k0H285LClVFTNAMycFIWYYI3luL14bFGlVOVBsMhcSU1J3XjolQ0MXEkIfMFcjBlcgKGcNKmQ5Kg0hSn4fPUokAHBjdzs_UhszN0I_ElsTCWkAJFtEMWZGNnZEAWVoFFY_VDc7Fn8wF0kuFQ5SKVVOU2AsSHMZe0kaIXpKMCAvGjMgWngUHE4hLkQ7E3M2TEFfM2U-WHQRSU8AChUtREpJBxMaKngOFVodKwIATVUjAn8-bHdaKmwhAiEGTTg8BAcEKGFPJx4KIUIMPVICcEYcFU5aLlENKjAWNDQoBUgeHmpnF2hATVleU3IMTQhAdnk1JV1KNH8jT0shWVYsEDo6NAlmMVoFKFcHCld6QUs1aHUcJ2ZeNk8WP2JLQGMAFRETUwcmDyJkGVcaMWIbCxYNElU_WxdDLCg5HGtuC3txRHAcPWIHJwM4HhJXPmlkaS81AihEIiEmCFsFKWtEQ1M5SV8DbU8xBkcnNhgeN1sSVG8yb1pEPGhoPFBuO0IiOGQqNXVQMhUZaUBjCDgrBUgJA0QZRVAkNXQfKjh0DDhoFBYeN0QyG04jNlwWVDs9GwUTEwR8CV4gMUBIJ0Ykd15EMghwHlYYOEY6NiwuUGMhCngtHQhmS1U2Bn5QZ3RPJmc1BwdJPn0cC29eMygsHTRiOHxsHWcwNW0gN011fQ5VS0QpLW8HNmMoI3o1JmwlCHcsIz0VMk4iaFUHZx8eD3ATLnQZdGRCXm0WPntqLG15IWUUMFtGBhlAFF03PEkxDEA3BjkYLCFGBXc_CxlIGEduS2k2dHFBDWgLR1kvPUxXOFMiY0dEF2UcKUxFD1JwMzYFF1NOWREVW28gDTgtKmoxQnMAFEQPQGIcXgIUTUkSI1gtVF0rAXYxMnEBVCQ_DzUfE1BLPx8bQX0qPVs8OQczOQ52IAoSCmFFFgMaJlhAbFkJPxprE0F8FDo3aApVekQ8RWYqLUovGEkuVGg8HU4_TnJWFXsAD3EVJng-TWEQSUAfXDENN1IsGRMdRUkiKGQvHjpuF34nBH82NElYDEU2CXoZbAEeX2g0IGtvIUx4LFAAQXA8A2sCHg94f1E_HjAeHQotD1shDF0SAS13LVFEDzwkbmscA0YPIEcTP3Q1KVYcUyJCIUUILgltA00xMmIECTBeZXYFcH4iJTsaO21NQ0cWB2wqWnoSATsCNVYyKXVbY0kff0ACJVwwURsJMjJYJWdiIW8YPFlBORtIJwA_M3VHAURwFFQDSj86MSQaDFh8G2luI2BDN20GbUYbB2lLHHAuSUMwG0E1cmcYZlsISlRuAgoGNUEGL3c2QW4vPHMNEhsFP10_FnUJAkEfLHo-XhcvHXkpEXY6extHD2wECSkGTwo9Pzw9K1NLFF8bEh0ZFmg3FF87Hm43F3NkCC8IVxIkBkJCO1wIDDw0D0F8Nmc1f3hVG0kUG3VMEn8XA0ApWnIXP0g9KQo-AFMNHDYcAkxdVWkOTW0-Uho8Jis8QHUxCk0bC0EeCTstKlw2EhgYUHgMEmweBW8-UgtEDmUdIUV0H2QxHlhBJ2k8El8gNnRlPUACN2EDFTA-EXsnbUcyCBN4H39-SGEQQUooL1wMGhs6TlsrTH4FUmkiYUoKGHU6F10HHE8teTc6UBoMTxNiLBgXAkM9R1JLI1ccCnkbMz8gD2AACncia3dcCmMWU2IwTxgWMTY9YwBoD2Z9KXkMEGVGKmw9OwdUA0IwHWkHKjQREEY2aEZ_FidbAwt6D39ZZWQdNkwKBH45HU4SDDwbJiUvFEQKPUhLW1kNSnwWBUNaP0dZZxYwJioCBH0UHkEqKXMPAlUEVmYlCnxmP3QrcUwnBW0OAm4SfQtGLWwkMAt3Vht_B0IyXmQmKXkCAndKB0UuOkoqD2siF1UCEV0SailSGEtlHD0Wa1gfZxhKVh88' }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://snaptwitter.io/en'
            }
        })

        const json = res.data

        return {
            username: json.username || 'Unknown',
            medias: json.medias ? json.medias.map(media => ({
                type: media.type || 'Unknown',
                media: media.media || null,
                bitrate: media.bitrate || null,
                contentType: media.content_type || null,
                thumbnail: media.thumbnail || null
            })) : []
        }
    } catch (err) {
        throw Error(err.message)
    }
}

module.exports = twitter