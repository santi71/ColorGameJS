var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
    // mode buttons event listeners
    setUpModeBtns();
    setUpSquares();
    reset();
}

function setUpModeBtns() {
    for(var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for(var i = 0; i < squares.length; i++) {


        //add click listeners to squares
        squares[i].addEventListener("click", function(){
        
         // grab color of clicked square
         var clickedColor = this.style.background;
    
         // compare color to picked color
         if(clickedColor === pickedColor) {
             messageDisplay.textContent = "Correct!";
             changeColors(clickedColor);
             h1.style.background = clickedColor;
             resetBtn.textContent = "Try Again";
    
         } else {
             this.style.background = "#232323";
             messageDisplay.textContent = "Try Again!";
         }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    // pick new random color from arr
    pickedColor = pickColor();
    // Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";

    messageDisplay.textContent = "";
    // change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];

        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(3);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++) {
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function(){ 
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(6);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++) {
//             squares[i].style.background = colors[i];
//             squares[i].style.display = "block";
//     }
// })
resetBtn.addEventListener("click", function() {
    reset();
});
colorDisplay.textContent = pickedColor;

    function changeColors(color) {
        // loop through all squares
        for(var i = 0; i < squares.length; i++) {
        // Change each color to match given color
        squares[i].style.background = color;
        squares[i].style.transition = "500ms";
        }
        

    }

    function pickColor() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    function generateRandomColors(num) {
        // make an array
        var arr = [];
       
        // repeat num times
        for(var i = 0; i < num; i++) {
            // get random color and push into arr
            arr.push(randomColor());
        }
        // return that array
        return arr;
    }

    function randomColor() {
        // pick  a "red" from 0 - 255
        var r = Math.floor(Math.random() * 256);
        // pick  a "green" from 0 - 255
        var g = Math.floor(Math.random() * 256);
        // pick  a "blue" from 0 - 255
        var b = Math.floor(Math.random() * 256);

        return "rgb(" + r + ", " + g + ", " + b + ")";

    }

