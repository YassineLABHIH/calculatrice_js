"use strict";

/* Variable*/
var screen = document.getElementById('screen');
var onScreen = [];
var ce = document.getElementById('ce');
var clear = document.getElementById('clear');
var cancel = document.getElementById('cancel');
var divide = document.getElementById('divide');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var multiply = document.getElementById('multiply');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var less = document.getElementById('less');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var dayNight = document.getElementById('dayNight');
var more = document.getElementById('more');
var zero = document.getElementById('zero');
var point = document.getElementById('point');
var equal = document.getElementById('equal');
var write = screen.innerHTML;
var calcul;
var result;
var body = document.getElementById('body');
var button = document.getElementById('button');
var dark_theme_class = 'dark';
/* Function*/

function toDisplayOne() {
  onScreen.push('1');
  screen.innerHTML = onScreen.join('');
}

function toDisplayTwo() {
  onScreen.push('2');
  screen.innerHTML = onScreen.join('');
}

function toDisplayThree() {
  onScreen.push('3');
  screen.innerHTML = onScreen.join('');
}

function toDisplayFour() {
  onScreen.push('4');
  screen.innerHTML = onScreen.join('');
}

function toDisplayFive() {
  onScreen.push('5');
  screen.innerHTML = onScreen.join('');
}

function toDisplaySix() {
  onScreen.push('6');
  screen.innerHTML = onScreen.join('');
}

function toDisplaySeven() {
  onScreen.push('7');
  screen.innerHTML = onScreen.join('');
}

function toDisplayEight() {
  onScreen.push('8');
  screen.innerHTML = onScreen.join('');
}

function toDisplayNine() {
  onScreen.push('9');
  screen.innerHTML = onScreen.join('');
}

function toDisplayZero() {
  onScreen.push('0');
  screen.innerHTML = onScreen.join('');
}

function toDisplayDivide() {
  onScreen.push('/');
  screen.innerHTML = onScreen.join('');
}

function toDisplayMultiply() {
  onScreen.push('*');
  screen.innerHTML = onScreen.join('');
}

function toDisplayLess() {
  onScreen.push('-');
  screen.innerHTML = onScreen.join('');
}

function toDisplayMore() {
  onScreen.push('+');
  screen.innerHTML = onScreen.join('');
}

function toDisplayPoint() {
  onScreen.push('.');
  screen.innerHTML = onScreen.join('');
}

function toDisplayCancel() {
  onScreen.pop();
  screen.innerHTML = onScreen.join('');
}

function toDisplayClear() {
  onScreen.length = 0;
  screen.innerHTML = onScreen.join('');
}

function toCalcul() {
  if (result === undefined) {
    result = 0;
  }

  result = eval(onScreen.join(''));
  onScreen = [result];
  console.log(result);
  screen.innerHTML = result;
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