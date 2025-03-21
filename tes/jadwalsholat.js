const axios = require('axios');
const cheerio = require('cheerio');

async function getJadwalSholat(kodeWilayah) {
    try {
        const url = `https://jadwalsholat.org/jadwal-sholat/monthly.php?id=${kodeWilayah}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        let jadwal = [];

        $('tr[class^="table_"]').each((i, el) => {
            const tds = $(el).find('td');

            if (tds.length === 9) {
                jadwal.push({
                    tanggal: $(tds[0]).text().trim(),
                    imsyak: $(tds[1]).text().trim(),
                    subuh: $(tds[2]).text().trim(),
                    terbit: $(tds[3]).text().trim(),
                    dhuha: $(tds[4]).text().trim(),
                    dzuhur: $(tds[5]).text().trim(),
                    ashar: $(tds[6]).text().trim(),
                    maghrib: $(tds[7]).text().trim(),
                    isya: $(tds[8]).text().trim()
                });
            }
        });

        console.log(jadwal);
        return jadwal;
    } catch (error) {
        console.error('Error mengambil data:', error.message);
    }
}

getJadwalSholat(307);
