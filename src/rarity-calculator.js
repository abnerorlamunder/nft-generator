import inquirer from 'inquirer';
import fs from 'fs';
import * as calculateRarity from './lib/calculate-rarity.js';

export default function rarityCalculator() {
  return new Promise((resolve, reject) => {
    const dir = "output";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    inquirer
      .prompt([
        {
          type: 'list',
          name: 'Options',
          message: 'Select an Rarity Calculation model',
          choices: ['Average/Mean Trait Rarity Model', 'Statistical Rarity Model', 'Rarity Score Model', 'Exit'],
        },
      ])
      .then(answers => {
        if (answers.Options == "Exit") {
          process.exit()
        } else {
          let calculationModel = null;
          let fileName = '';
          switch (answers.Options) {
            case 'Average/Mean Trait Rarity Model':
              fileName = '/nfts-with-rarity-avg.json'
              calculationModel = calculateRarity.averageTrait;
              break;
            case 'Statistical Rarity Model':
              fileName = '/nfts-with-rarity-stat.json'
              calculationModel = calculateRarity.statistic;
              break;
            case 'Rarity Score Model':
              fileName = '/nfts-with-rarity-score.json'
              calculationModel = calculateRarity.rarityScore;
              break;
            default:
              console.log('Invalid option. Exiting...')
              process.exit()
              break;
          }

          var nft_list = JSON.parse(fs.readFileSync('output/nfts-unique.json'))
          for (let i = 0; i < nft_list.length; i++) {
            const element = nft_list[i];
            let calculatedRarity = calculationModel(element);
            element.rarity = calculatedRarity;
          }

          let possibilitySum = nft_list.reduce((acc, cur) => acc + cur.rarity, 0)

          for (let i = 0; i < nft_list.length; i++) {
            const element = nft_list[i];
            element.rarity = element.rarity / possibilitySum * 100;
          }

          fs.writeFile(dir + fileName, JSON.stringify(nft_list), function (err) {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              console.log('Sucessfully saved generated nft on path output/nfts.json')
              resolve();
            }
          })

        }
      });
  });
}