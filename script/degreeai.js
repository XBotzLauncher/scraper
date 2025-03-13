const axios = require('axios');

async function degree(pertanyaan) {
    const url = 'https://degreeguru.vercel.app/api/guru';

    try {
        const {
            data
        } = await axios.post(
            url, {
                messages: [{
                        role: 'system',
                        // bawaan web
                        content: '**Welcome to DegreeGuru**\n\nYour ultimate companion in navigating the academic landscape of Stanford.'
                    },
                    {
                        role: 'user',
                        content: pertanyaan
                    }
                ]
            }, {
                headers: {
                    'accept': '*/*',
                    'content-type': 'application/json',
                    'origin': 'https://degreeguru.vercel.app',
                    'referer': 'https://degreeguru.vercel.app/',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36'
                }
            }
        );

        return data;
    } catch (error) {
        return {
            error: 'data tak da'
        };
    }
}

module.exports = degree