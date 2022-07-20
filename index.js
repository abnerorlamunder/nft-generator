import inquirer from 'inquirer';
import traitsGenerator from './src/traits-generator.js';
import rarityCalculator from './src/rarity-calculator.js';
import artworkGenerator from './src/artwork-generator.js';
import mint from './src/mint.js';

inquirer
  .prompt([
    {
      type: 'list',
      name: 'Options',
      message: 'Select what you want to do',
      choices: ['Full generate', 'Generate traits', 'Calculate rarity', 'Generate artwork', 'Mint', 'Exit'],
    },
  ])
  .then(async answers => {
    if (answers.Options == "Exit") {
      process.exit()
    } else {
      switch (answers.Options) {
        case 'Full generate':
          await traitsGenerator();
          await rarityCalculator();
          await artworkGenerator();
          break;
        case 'Generate traits':
          await traitsGenerator();
          break;
        case 'Calculate rarity':
          await rarityCalculator();
          break;
        case 'Generate artwork':
          await artworkGenerator();
          break;
        case 'Mint':
          await mint();
          break;
        default:
          break;
      }
    }
  })