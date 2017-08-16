// const couponLocations = [
//   { room: 'Living room', amount: 5 },
//   { room: 'Kitchen', amount: 2 },
//   { room: 'Bathroom', amount: 1 },
//   { room: 'Master bedroom', amount: 7 },
// ];
 
// function couponCounter(totalAmount, location) {
//   return totalAmount + location.amount;
// }
 
// console.log(reduce(couponLocations, couponCounter, 0)); // prints 15
// What if we already have three coupons in our hand? We can easily account for that by adjusting the initial value:
// console.log(reduce(couponLocations, couponCounter, 3)); // prints 18

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// function add(a, b) {
//     return a + b;
// }

// var totalBatteries = batteryBatches.reduce(add, 0);

var totalBatteries = batteryBatches.reduce( (prev, curr) => prev + curr );

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

var monologueLineNumbers = monologueLines.map(function(line, index) {
  return line.split(" ").length
})

var wordCountMap = monologueLineNumbers.reduce(function (allNumbers, number) {
  if (number in allNumbers) {
    allNumbers[number]++
  }
  else {
    allNumbers[number] = 1
  }
  return allNumbers;
}, {})