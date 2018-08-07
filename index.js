const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

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

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

function reducer (result, element) {
  return result + element
}

var totalBatteries = batteryBatches.reduce(reducer)

function callbackK(result, element) {

  var count = element.split(" ").length

  if (result.hasOwnProperty(count)) {
    result[count] += 1
  } else {
    result[count] = 1
  }

  return result;
}

var wordCountMap = monologueLines.reduce(callbackK, {})

// 
// (callbackK) => {
//   var result = {}
//
//   monologueLines.forEach (element => {
//     result = callbackK(result, element)
//   })
//   console.log(result)
//   return result
//
// }





// monologueLines.reduce(callbackK, {})
