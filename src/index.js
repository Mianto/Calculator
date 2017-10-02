const ce = document.getElementsByClassName('ce')[0];
const ac = document.getElementsByClassName('ac')[0];

const entry = document.getElementsByClassName('entry')[0];
const history = document.getElementsByClassName('history')[0];


const add = document.getElementsByClassName('add')[0];

const one = document.getElementsByClassName('one')[0];
const two = document.getElementsByClassName('two')[0];
const three = document.getElementsByClassName('three')[0];
const four = document.getElementsByClassName('four')[0];
const five = document.getElementsByClassName('five')[0];
const six = document.getElementsByClassName('six')[0];
const seven = document.getElementsByClassName('seven')[0];
const eight = document.getElementsByClassName('eight')[0];
const nine = document.getElementsByClassName('nine')[0];
const zero = document.getElementsByClassName('zero')[0];

const decimal = document.getElementsByClassName('decimal')[0];


const equal = document.getElementById('equal');

equal.addEventListener('click', function(){
  let hist = history.innerHTML;
  history.innerHTML = hist + "=" + Math.round(eval(hist) * 1000) / 1000;
  entry.innerHTML = '0';
}, false);

ce.onclick = function() {
 entry.innerHTML = '0';
}

ac.onclick = function() {
  entry.innerHTML = '0';
  history.innerHTML = '0';
}

nine.addEventListener('click', () => { setValue('9'); }, false);
eight.addEventListener('click', () => { setValue('8'); }, false);
seven.addEventListener('click', () => { setValue('7'); }, false);
six.addEventListener('click', () => { setValue('6'); }, false);
five.addEventListener('click', () => { setValue('5'); }, false);
four.addEventListener('click', () => { setValue('4'); }, false);
three.addEventListener('click', () => { setValue('3'); }, false);
two.addEventListener('click', () => { setValue('2'); }, false);
one.addEventListener('click', () => { setValue('1'); }, false);
zero.addEventListener('click', () => { setValue('0'); }, false);


add.addEventListener('click', () => { operations('+'); }, false);

const subtract = document.getElementsByClassName('subtract')[0];
subtract.addEventListener('click', () => { operations('-'); }, false);

const multiply = document.getElementsByClassName('multiply')[0];
multiply.addEventListener('click', () => { operations('*'); }, false);

const divide = document.getElementsByClassName('divide')[0];
divide.addEventListener('click', () => { operations('/'); }, false);

function setValue(value) {
  let val = entry.innerHTML;
  let hist = history.innerHTML
  if (val == '0' || val=='-' || val == '+' || val == '/' || val == '*' || hist.indexOf('=') != -1) {
    val = value;
  } else {
    val += value;
  }

  if (hist == '0' || hist.indexOf('=') != -1) {
    hist = value;
  } else {
    hist += value;
  }

  history.innerHTML = hist;
  entry.innerHTML = val;
}

decimal.onclick = function () {
  let val = entry.innerHTML;
  let hist = history.innerHTML;
  if (val == '0') {
    val = '0.';
    hist = '0.';
  } else {
    if (val.indexOf('.') == -1)
    {
      val += '.';
      hist += '.';
    }
  }
  entry.innerHTML = val;
  history.innerHTML = hist;
}


function operations(op) {

  let val = entry.innerHTML;
  let hist = history.innerHTML;
  let ch = hist[hist.length - 1];
  if (ch == '+' || ch == '-' || ch == '*' || ch == '/' || hist.indexOf('=') != -1){
    return;
  }
  if (hist == '0') {
    history.innerHTML = val + op;
  } else {
    history.innerHTML = hist + op;
  }
  entry.innerHTML = op;
}



