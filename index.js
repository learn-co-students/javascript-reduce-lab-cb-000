const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const totalBatteries = batteryBatches.reduce(function(sum, val) {
  return sum + val;
}, 0);


const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

const wordCountMap = monologueLines.reduce((hash, sentence) => {
  const sentenceLength = sentence.split(' ').length;
  if (!hash[sentenceLength]) {
    hash[sentenceLength] = 0;
  }
  hash[sentenceLength]++;
  return hash
}, {});








const arr = [1, 2, 3, 4, 5];

function sumz(array) {
  sum = 0
  array.forEach(el=>{
    sum = sum + el
  });
  return sum;
}

function devide(array) {
  devide = 1
  array.forEach(el=>{
    devide = devide / el
  });
  return devide;
}

function mul(array) {
  mul = 1
  array.forEach(el=>{
    mul = mul * el
  });
  return mul;
}






// sf
