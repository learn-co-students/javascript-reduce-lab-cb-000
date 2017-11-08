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

var totalBatteries =
//using the .reduce() calling into the batteryBatches array
batteryBatches.reduce(function(total, value) {
//sum of all values
  return total + value
//setting starting point '0'
}, 0)


var wordCountMap =
//calling monologueLines array and putting through reduce function = wordCountMap
monologueLines.reduce(function(map, sentence) {
//splitting all sentences in array and counting the characters to =  var wordCount
var wordCount = sentence.split(' ').length;
//if wordCount sentence doesnt equal 0..
if (!map[wordCount]) {
    map[wordCount] = 0;
}
//then you increase key count number every time you receive the length of sentence 
map[wordCount]++;
//return the total of keys
return map;
}, {});
