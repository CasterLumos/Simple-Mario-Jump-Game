const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        mario.src = "./assets/game-over.png";
        mario.style.width = "65px";
        mario.style.bottom = `${marioPosition}px`;
        mario.style.animation = "none";
        mario.style.marginLeft = "50px";
        pipe.style.left = `${pipe.offsetLeft}px`;
        pipe.style.animation = "none";

        clearInterval(loop);
    }
}, 5);

document.addEventListener("keydown", () => {
    mario.classList.add("jump");
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
});
