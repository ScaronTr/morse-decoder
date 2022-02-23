const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
  
  let binArr;
  let filterBinArr = [];
  let binLetter;
  let morseArr = [];

  binArr = expr.split('');

  for (let i = 0; i < binArr.length; i += 10) {
     filterBinArr.push(binArr.slice(i, i + 10));
  };

  for (let item of filterBinArr) { 
     for (let i = 0; i < item.length; i++) {
        if (item[0] === '0') {
           item.shift();
           i = 0;
        } else {
           break;
        }
     }
  };

  filterBinArr.map((value, index) => {
     if (value.join('') !== '**********') { 
        binLetter = [];
        for (let i = 0; i < value.length; i += 2) {
              binLetter.push(value.slice(i, i + 2).join(''));
        }
        morseArr[index] = binLetter.flat();
     } else {
        morseArr[index] = value;
     }
  });

  for (let item of morseArr) {
     if (item !== '**********') {
        for(let i = 0; i < item.length; i++) {
           if (item[i] === '10') {
              item[i] = '.';
           } else if (item[i] === '11'){
              item[i] = '-';
           };
        }
     } 
  };

  morseArr.map((value, index) => {
     morseArr[index] = value.join('')
  });

  for (let i = 0; i < morseArr.length; i++) {
     for (let key in MORSE_TABLE) {
        if (morseArr[i] === key) {
           morseArr[i] = MORSE_TABLE[key];
        };
     };
  };
  
  return morseArr.join('');
}

module.exports = {
    decode
}