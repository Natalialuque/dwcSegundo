const ball = document.getElementById("ball");

console.log("Alto: " + screen.height);
ball.style.top = (parseInt(screen.availHeight/2) - 50) + "px";
ball.style.left = "0px";

const intervalo = setInterval(function () {
    let izq = parseInt(ball.style.left.substring(0, ball.style.left.length-2));
    if (izq < (screen.width - 100))
        ball.style.left = (izq + 10) + "px";
}, 100);

/****************************************************************** */

document.getElementById("bStop").addEventListener("click", () => {
    clearInterval(intervalo);
    ball.style.backgroundColor = "#569";
})
