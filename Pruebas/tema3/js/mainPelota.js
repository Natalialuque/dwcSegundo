const ball = document.getElementById("ball");

console.log("Alto: " + screen.height);
ball.style.top = (parseInt(screen.availHeight/2) - 50) + "px";
ball.style.left = "0px";

let intervalo = setInterval(function () {
    let izq = parseInt(ball.style.left.substring(0, ball.style.left.length-2));
    ball.style.left = (izq + 10) + "px";
}, 100);