import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboortejaar=parseFloat(await userInput.question('Geef je geboortejaar: '));
let toekomstjaar=parseFloat(await userInput.question('Geef een toekomstjaar: '));
console.log('In '+ toekomstjaar + ' zal je ' + (toekomstjaar-geboortejaar-1)+' of '+ (toekomstjaar-geboortejaar)+ ' jaar oud zijn.')

process.exit();