function addNum(value) {
   document.getElementById("input").innerHTML += value;
}
function addZero(value) {
  var myString = document.getElementById("input").textContent;
  if (myString[myString.length - 1] == ".") {
    document.getElementById("input").innerHTML += value;
  } else if (myString[myString.length - 1] !== "0") {
    document.getElementById("input").innerHTML += value;
  } else if (myString[1] == ".") {
    document.getElementById("input").innerHTML += value;
  }
}
function clearIt() {
  document.getElementById("input").innerHTML = "";
}
function backspaceIt() {
  var myString = document.getElementById("input").innerHTML;
  document.getElementById("input").innerHTML = myString.slice(0, -1);
}
function symIt(val) {
  myString = document.getElementById("input").textContent;
  if (myString.length !== 0) {
    if (myString[myString.length - 1] !== "/" && myString[myString.length - 1] !== "*" && myString[myString.length - 1] !== "+" && myString[myString.length - 1] !== "-") {
      document.getElementById("input").innerHTML += val;
    } else {
      document.getElementById("input").innerHTML += "";
    }
  }
}
function periodIt(val) {
  myString = document.getElementById("input").textContent;
  if (myString.indexOf(".") == -1) {
    if (myString !== "") {
      document.getElementById("input").innerHTML += val;
    }
  }
  /*if (myString.length !== 0) {
    if (myString !== val) {
      document.getElementById("input").innerHTML += val;
    } else {
      document.getElementById("input").innerHTML += "";
    }
  }*/
}
function equalIt() {
  myString = document.getElementById("input").textContent;
  document.getElementById("input").innerHTML = eval(myString);
}