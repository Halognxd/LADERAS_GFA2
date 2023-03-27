function add() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let result = num1 + num2;
  document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + result;
}

function subtract() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let result = num1 - num2;
  document.getElementById("result").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + result;
}

function multiply() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let result = num1 * num2;
  document.getElementById("result").innerHTML = "The product of " + num1 + " and " + num2 + " is " + result;
}

function divide() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let result = num1 / num2;
  document.getElementById("result").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + result;
}
