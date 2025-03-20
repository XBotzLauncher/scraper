const fs = require('fs');
const crypto = require('crypto');
const instaDownloader = require('../script/instagram.js');

(async () => {
  const link = `https://www.instagram.com/p/DHNjPQ6TbmV/?img_index=2&igsh=NzQ0YTBwYWVtdWl1`;
  const format = "4k"
  
    const id = instaDownloader.extractId(link);
    if (!id) {
      return {
        status: false,
        code: 400,
        error: "Gagal mendapatkan ID dari link Instagram."
      };
    }
  try {
    const dl = await instaDownloader.download(link, format)
      
    // Simpan hasil ke file tes.txt
    fs.writeFileSync('tes.txt', JSON.stringify(dl, null, 2), 'utf-8');
    
    console.log('Data berhasil disimpan ke tes.txt');
  } catch (error) {
    console.log(error.message);
  }
})();