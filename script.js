var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
		body.style.background = 
	"linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";

	 css.textContent = body.style.background + ";"
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(){
	colorOfColor = getRandomColor();
	color1.value = colorOfColor;
	colorOfColor = getRandomColor();
	color2.value = colorOfColor;
	setGradient();
}

// http://youmightnotneedjquery.com/   jQuery not too useful, react is better
// no need to run the function because it runs automatically by the event listener
color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient); 

button.addEventListener("click", changeColor);


setGradient();


