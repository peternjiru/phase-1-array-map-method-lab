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

function upperCs(stg) {
  function wordCapitals(stg) {
    stg = stg.charAt(0).toUpperCase() + stg.slice(1)
    return stg
  }

  return stg.split(' ')
    .map(wordCapitals)
    .join(' ')
}

const titleCased = () => {
  return tutorials.map(upperCs)
}

//console.log(titleCased()) //This is just to test output
