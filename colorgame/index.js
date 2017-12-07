var numberSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("rgb");
colorDisplay.innerHTML = pickedColor;
var messageDisplay = document.getElementById("message");
var resetBtn = document.getElementById("button_new");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setModeButtons();
  setSquares();
  reset();
}
function setSquares() {
  this.innerHTML = "New Colors?";
  colors = generateRandomColors(numberSquares);
  pickedColor = pickColor();
  colorDisplay.innerHTML = pickedColor;
  messageDisplay.innerHTML = "";
  for (var x= 0; x < squares.length; x++) {
    if(colors[x]) {
      squares[x].style.display = "block";
      squares[x].style.background = colors[x];
    } else {
      squares[x].style.display = "none";
    }
  }
}
function setModeButtons() {
  for (var x = 0; x < modeButtons.length; x++) {
    modeButtons[x].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY" ? numberSquares = 3: numberSquares = 6;
      reset();
    });
  }
}
function reset() {
  colors = generateRandomColors(numberSquares);
  pickedColor = pickColor();
  colorDisplay.innerHTML = pickedColor;
  messageDisplay.innerHTML = "";
  resetBtn.innerHTML = "New colors?"
  for (var x= 0; x < squares.length; x++) {
    if(colors[x]) {
      squares[x].style.display = "block";
      squares[x].style.background = colors[x];
    } else {
      squares[x].style.display = "none";
    }
  }
  document.getElementById("info").style.background = "#242424";

}
resetBtn.addEventListener("click", function(){
  reset();
});

for (var x = 0; x < squares.length; x++) {
  // add colors
  squares[x].style.background = colors[x];
  // add click
  squares[x].addEventListener("click", function() {
    // grab color
    var clickedColor = this.style.background;
    //compare color
    if (clickedColor === pickedColor) {
      messageDisplay.innerHTML = "Correct";
      correctChangeColors(clickedColor);
      resetBtn.innerHTML = "Play again?";
      console.log("correct");
    } else {
      this.style.background = "#242424";
      messageDisplay.innerHTML = "Try again!";
      console.log("wrong");
    }
  });
}

function correctChangeColors(color) {
  //loop
  for (var x = 0; x < squares.length; x++) {
    squares[x].style.background = color;
  }
  document.getElementById("info").style.background = color;
}

function pickColor() {
  var num = Math.floor(Math.random() * colors.length);
  return colors[num];
}

function generateRandomColors(num) {
  var arr = [];
  for (var x = 0; x < num; x++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}