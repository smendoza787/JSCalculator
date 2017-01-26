var screen = document.getElementById('screenDisplay');

function oneButton() {
  screen.append('1');
}

function twoButton() {
  screen.append('2');
}

function threeButton() {
  screen.append('3');
}

function fourButton() {
  screen.append('4');
}

function fiveButton() {
  screen.append('5');
}

function sixButton() {
  screen.append('6');
}

function sevenButton() {
  screen.append('7');
}

function eightButton() {
  screen.append('8');
}

function nineButton() {
  screen.append('9');
}

function zeroButton() {
  screen.append('0');
}

// operator buttons

function plus() {
  screen.append('+');
}

function minus() {
  screen.append('-');
}

function mult() {
  screen.append('*');
}

function divi() {
  screen.append('/');
}

function equalsButton() {
  var answer = math.eval(screen.textContent);
  clearBox('screenDisplay');
  screen.append(answer);
}

function decimalButton() {
  screen.append('.');
}

function allClearButton() {
  clearBox('screenDisplay');
}

function clearBox(elem) {
  document.getElementById(elem).innerHTML = "";
}
