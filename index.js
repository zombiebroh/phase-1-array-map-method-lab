const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  return arrayUpper;
}

console.log(titleCased);


function splitSentence (tut) {
  const newArray = []
  for(let i = 0; i < tutorials.length; i++) {
    newArray.push(tut[i].split(' '))
  }
  return newArray;
}

const arraySplit = splitSentence(tutorials);

function upperCase (upper) {
  let newArray = []
  for(let i = 0; i < arraySplit.length; i++) {
    newArray.push(upper[i].map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' '))

  }
  return newArray
}

const arrayUpper = upperCase (arraySplit);


// const arrayInArray = arraySplit[0];

// const uppercase = arrayInArray.map(x => x.charAt(0).toUpperCase() + x.slice(1))
// console.log(uppercase);




// const word = "hello"

// const word2 = word.charAt(0).toUpperCase() + word.slice(1);

// console.log(word2);
