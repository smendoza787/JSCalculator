var expression = '';
var isDone = false;

// Grab screenDisplay h1 inside #screen
var screen = document.getElementById('screenDisplay');
var error = document.getElementById('errorMsg');

function oneButton() {
  checkIfDone();
  screen.append('1');
  expression += '1';
  checkLength(screen);
}

function twoButton() {
  checkIfDone();
  screen.append('2');
  expression += '2';
  checkLength(screen);
}

function threeButton() {
  checkIfDone();
  screen.append('3');
  expression += '3';
  checkLength(screen);
}

function fourButton() {
  checkIfDone();
  screen.append('4');
  expression += '4';
  checkLength(screen);
}

function fiveButton() {
  checkIfDone();
  screen.append('5');
  expression += '5';
  checkLength(screen);
}

function sixButton() {
  checkIfDone();
  screen.append('6');
  expression += '6';
  checkLength(screen);
}

function sevenButton() {
  checkIfDone();
  screen.append('7');
  expression += '7';
  checkLength(screen);
}

function eightButton() {
  checkIfDone();
  screen.append('8');
  expression += '8';
  checkLength(screen);
}

function nineButton() {
  checkIfDone();
  screen.append('9');
  expression += '9';
  checkLength(screen);
}

function zeroButton() {
  checkIfDone();
  screen.append('0');
  expression += '0';
  checkLength(screen);
}

// operator buttons

function plus() {
  ifDoneOper();
  screen.append('+');
  expression += '+';
  checkLength(screen);
}

function minus() {
  ifDoneOper();
  screen.append('-');
  expression += '-';
  checkLength(screen);
}

function mult() {
  ifDoneOper();
  screen.append('*');
  expression += '*';
  checkLength(screen);
}

function divi() {
  ifDoneOper();
  screen.append('/');
  expression += '/';
  checkLength(screen);
}

function equalsButton() {
  if (expression) {
    var answer = math.eval(expression);
    clearBox('screenDisplay');
    expression = "";
    isDone = true;
    screen.append(answer);
  }
}

function decimalButton() {
  checkLength('screenDisplay');
  screen.append('.');
}

function allClearButton() {
  clearBox('screenDisplay');
  expression = "";
}

function clearBox(elem) {
  document.getElementById(elem).innerHTML = "";
}

function checkIfDone() {
  if (isDone === true) {
    clearBox('screenDisplay');
    expression = "";
    isDone = false;
  }
}

function ifDoneOper() {
  if (isDone === true) {
    isDone = false;
  }
}

function checkLength(elem) {
  if (elem.innerHTML.length > 9) {
    clearBox('screenDisplay');
    error.append('TOO MANY DIGITS');
    setTimeout(function() {
      clearBox('errorMsg');
    }, 1000);
  }
}
