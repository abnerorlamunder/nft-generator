import fs from 'fs';
import inquirer from 'inquirer';
import nftTiers from './lib/nft-tiers.js'

export default function mint() {
  return new Promise((resolve, reject) => {
    const dir = "output";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const fileName = '/nfts-with-rarity-stat.json'

    let nft_list = JSON.parse(fs.readFileSync(`output/${fileName}`))
    for (let i = 0; i < 100; i++) {
      const rolledNumber = Math.random() * 100
      let mintedNftTier = '';
      if (rolledNumber <= nftTiers.exclusive) {
        mintedNftTier = 'exclusive'
      } else if (rolledNumber <= nftTiers.legendary) {
        mintedNftTier = 'legendary'
      } else if (rolledNumber <= nftTiers.rare) {
        mintedNftTier = 'rare'
      } else {
        mintedNftTier = 'common'
      }

      console.log(`${rolledNumber} - ${mintedNftTier}`);
    }

    ///TODO: Get a random NFT within the selected tier
  })
}