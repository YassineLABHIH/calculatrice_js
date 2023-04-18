/* Variable*/
let screen = document.getElementById('screen');
let onScreen = [];
const ce = document.getElementById('ce');
const clear = document.getElementById('clear');
const cancel = document.getElementById('cancel');
const divide = document.getElementById('divide');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multiply = document.getElementById('multiply');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const less = document.getElementById('less');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const dayNight = document.getElementById('dayNight');
const more = document.getElementById('more');
const zero = document.getElementById('zero');
const point = document.getElementById('point');
const equal = document.getElementById('equal');
let write = screen.innerHTML;
let calcul;
let result;
let body = document.getElementById('body')
let button = document.getElementById('button');
let dark_theme_class = 'dark';

/* Function*/
function toDisplayOne() {
   onScreen.push('1')
   screen.innerHTML = onScreen.join('');

}

function toDisplayTwo() {
   onScreen.push('2')
   screen.innerHTML = onScreen.join('')
}

function toDisplayThree() {
   onScreen.push('3')
   screen.innerHTML = onScreen.join('');

}

function toDisplayFour() {
   onScreen.push('4')
   screen.innerHTML = onScreen.join('')
}

function toDisplayFive() {
   onScreen.push('5')
   screen.innerHTML = onScreen.join('');

}

function toDisplaySix() {
   onScreen.push('6')
   screen.innerHTML = onScreen.join('')
}

function toDisplaySeven() {
   onScreen.push('7')
   screen.innerHTML = onScreen.join('');

}

function toDisplayEight() {
   onScreen.push('8')
   screen.innerHTML = onScreen.join('')
}

function toDisplayNine() {
   onScreen.push('9')
   screen.innerHTML = onScreen.join('');

}

function toDisplayZero() {
   onScreen.push('0')
   screen.innerHTML = onScreen.join('')
}


function toDisplayDivide() {
   onScreen.push('/');
   screen.innerHTML = onScreen.join('')
}

function toDisplayMultiply() {
   onScreen.push('*');
   screen.innerHTML = onScreen.join('')
}

function toDisplayLess() {
   onScreen.push('-');
   screen.innerHTML = onScreen.join('')
}

function toDisplayMore() {
   onScreen.push('+');
   screen.innerHTML = onScreen.join('')
}

function toDisplayPoint() {
   onScreen.push('.');
   screen.innerHTML = onScreen.join('')
}

function toDisplayCancel() {
   onScreen.pop();
   screen.innerHTML = onScreen.join('')
}

function toDisplayClear() {
   onScreen.length = 0;
   screen.innerHTML = onScreen.join('')
}

function toCalcul() {

   if (result === undefined) {
      result = 0
   }
   result = eval(onScreen.join(''));
   onScreen = [result]
   console.log(result);
   screen.innerHTML = result
}

function dayNightMode(contains) {
   if (body.classList.contains(dark_theme_class)) {
      body.classList.remove(dark_theme_class);

   } else {
      body.classList.add(dark_theme_class);
   }
}

/* Execution*/
console.log(onScreen);

one.addEventListener("click", toDisplayOne);
two.addEventListener("click", toDisplayTwo);
three.addEventListener("click", toDisplayThree);
four.addEventListener("click", toDisplayFour);
five.addEventListener("click", toDisplayFive);
six.addEventListener("click", toDisplaySix);
seven.addEventListener("click", toDisplaySeven);
eight.addEventListener("click", toDisplayEight);
nine.addEventListener("click", toDisplayNine);
zero.addEventListener("click", toDisplayZero);
divide.addEventListener("click", toDisplayDivide);
multiply.addEventListener("click", toDisplayMultiply);
less.addEventListener("click", toDisplayLess);
more.addEventListener("click", toDisplayMore);
point.addEventListener("click", toDisplayPoint);
cancel.addEventListener("click", toDisplayCancel);
clear.addEventListener("click", toDisplayClear);
equal.addEventListener("click", toCalcul);
dayNight.addEventListener("click", dayNightMode);