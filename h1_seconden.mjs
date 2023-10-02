import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dag= parseFloat(await userInput.question('Geef het aantal dagen is: '));
let uur= parseFloat(await userInput.question('Geef het aantal uren is: '));
let minuut= parseFloat(await userInput.question('Geef het aantal minuten is: '));
let second= parseFloat(await userInput.question('Geef het aantal seconden is: '));

uur+=dag*24;
minuut+=uur*60;
second+=minuut*60;

console.log('Het aantal seconden: '+second);

process.exit();