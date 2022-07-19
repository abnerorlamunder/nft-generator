import fs from 'fs';
import generateTraits from './lib/traits-generator.js';

export default function traitsGenerator() {
  return new Promise((resolve, reject) => {
    var nft_list = generateTraits();
    const dir = "output";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFile(dir + '/nfts-unique.json', JSON.stringify(nft_list), function (err) {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log('Sucessfully saved generated nft on path output/nfts.json')
        resolve();
      }
    })
  })
}