import fs from 'fs';
import { arrayToObject, crawlFigmaFileData } from './utils.js';
// Load the exported variables from Figma
import dataFromExport from '../data/export.json' assert { type: 'json' };

const output = crawlFigmaFileData(arrayToObject(dataFromExport));

fs.writeFileSync(
  'figmaCrawler/output/baseFigmaTheme.js',
  `export default ${JSON.stringify(output, null, 2)}
  `,
  'utf-8'
);
console.log("Processing completed successfully. Output written to 'variableOutput.js'.");
