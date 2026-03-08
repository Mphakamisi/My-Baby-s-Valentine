var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  // This makes the button change text instantly without trying to send an email
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "I Love You! 🥰";
    
    // Optional: Make the button turn pink when clicked
    button.style.backgroundColor = "#ff1493"; 
  }
});
      
function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); 
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // Glow effect
    context.shadowColor = "rgba(255, 20, 147, 1)";
    context.shadowBlur = 8;

    // --- Messages 1 through 5 (Keep these as they are) ---
    if(frameNumber < 150){
        context.fillStyle = `rgba(255, 20, 147, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.02;
    }
    if(frameNumber >= 150 && frameNumber < 300){
        context.fillStyle = `rgba(255, 20, 147, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.02;
    }
    if(frameNumber == 300){ opacity = 0; }

    if(frameNumber > 300 && frameNumber < 450){
        context.fillStyle = `rgba(255, 20, 147, ${opacity})`;
        context.fillText("amongst trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.02;
    }
    if(frameNumber >= 450 && frameNumber < 600){
        context.fillStyle = `rgba(255, 20, 147, ${opacity})`;
        context.fillText("amongst trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.02;
    }
    if(frameNumber == 600){ opacity = 0; }

    if(frameNumber > 600 && frameNumber < 750){
        context.fillStyle = `rgba(255, 20, 147, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.02;
    }
    if(frameNumber >= 750 && frameNumber < 900){
        context.fillStyle = `rgba(255, 20, 147, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.02;
    }
    if(frameNumber == 900){ opacity = 0; }

    if(frameNumber > 900 && frameNumber < 1050){
        context.fillStyle = `rgba(255, 20, 147, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.02;
    }
    if(frameNumber >= 1050 && frameNumber < 1200){
        context.fillStyle = `rgba(255, 20, 147, ${opacity})`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.02;
    }
    if(frameNumber == 1200){ opacity = 0; }

    if(frameNumber > 1200 && frameNumber < 1350){
        context.fillStyle = `rgba(255, 20, 147, ${opacity})`;
        context.fillText("and yet here I am with the chance to know you", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.02;
    }
    if(frameNumber >= 1350 && frameNumber < 1500){
        context.fillStyle = `rgba(255, 20, 147, ${opacity})`;
        context.fillText("and yet here I am with the chance to know you", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.02;
    }
    if(frameNumber == 1500){ opacity = 0; }

    // --- THE BIG REVEAL (Everything overlaps here) ---
    
    // 1. The Name Message
    if(frameNumber > 1500){
        context.fillStyle = `rgba(255, 20, 147, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["I love you so much,", "Zigizentombi Oyama Sibusisiwe Nxumalo"], canvas.width / 2, canvas.height / 2 - 60, fontSize, lineHeight);
        } else {
            context.fillText("I love you so much Zigizentombi Oyama Sibusisiwe Nxumalo", canvas.width/2, canvas.height/2 - 50);
        }
        opacity = Math.min(opacity + 0.02, 1); 
    }
    
    // 2. The Wait Message (Fades in slightly after the name)
    if(frameNumber > 1550){
        context.fillStyle = `rgba(255, 20, 147, ${secondOpacity})`;
        context.fillText("I can't wait to share all my love with you!", canvas.width/2, canvas.height/2 + 10);
        secondOpacity = Math.min(secondOpacity + 0.02, 1);
    }

    // 3. Happy Valentine's Day & Button
    if(frameNumber > 1600){
        context.fillStyle = `rgba(255, 20, 147, ${thirdOpacity})`;
        context.fillText("Happy Valentine's Day <3", canvas.width/2, canvas.height/2 + 70);
        thirdOpacity = Math.min(thirdOpacity + 0.02, 1);
        button.style.display = "block";
    }   

    context.shadowColor = "transparent";
    context.shadowBlur = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
