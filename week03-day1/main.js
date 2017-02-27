console.log('in main.js');
var o = {};
var s = '';
var b = true;
var n = 1;
var a = [];
console.log('Using "typeof" operator:');
console.log(typeof o);
console.log(typeof s);
console.log(typeof b);
console.log(typeof n);
console.log(typeof a);

console.log('playing with dirrent tpes:');
var numberAsString = '9';
var secondString = 'bangs';
var number = 3;
var number1 = 1;
var number2 = 2;
var number3 = 3;
console.log(numberAsString + number);
console.log(typeof(numberAsString + number));
console.log(number1 + number2);
console.log(numberAsString + secondString);

console.log(parseInt(numberAsString)+ number1);
console.log(parseInt(3.13121));
console.log(parseInt('3.13121'));

console.log(parseFloat('as'));


var moneyInPocket = 20;
if (moneyInPocket > 10){
  console.log('another drink I beg!');
} else{
  console.log(' my g, have another');
}

var countryOfOrigin = 'Kenya';
var greeting = '';

switch(countryOfOrigin) {
  case 'France':
    greeting = 'Bonjour';
    break;
  case 'Spain':
    greeting = '¡Hola!';
    break;
  case 'Indonesia':
    greeting = 'Selamat sore';
    break;
  case 'Kenya':
    greeting = 'Jambo!';
    break;
  default:
    greeting = 'Well hello there';
    break;
}
console.log(greeting);

var dayOfWeek = 'Thursday';
// logical AND
if (dayOfWeek.toUpperCase() === 'THURSDAY' || dayOfWeek.toUpperCase() === 'FRIDAY') {
  console.log('Pub thisarvo!');
} else {
  console.log('Bummer :-(');
}

console.log('--- truthy/falsey:');
var truthyThings = [1, 0, 'something', '', -1, [], null, undefined, NaN, 'false', '0'];

// i is short for index
// for loop below will search/increment through the index of the arra
for(var i = 0; i < truthyThings.length; i++){

  console.log(' element', i, 'is', truthyThings[i]);

if(truthyThings[i]){

  console.log('---->true');
} else{
  console.log('---->false');
}
}

var yourName = prompt('what is your name');

if (yourName){

  alert('nice one, ', + yourName);
} else{

  alert('Not sure what you name is my g')
}
