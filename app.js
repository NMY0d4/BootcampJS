const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");
const coins = document.querySelector("#coins");
let coinsNumber = 0;

avatar.style.top = "100px";
avatar.style.left = "100px";

coin.style.top = "600px";
coin.style.left = "800px";

coins.innerHTML = coinsNumber;

function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();
    // const currTop = 0;

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const extractPos = (pos) => {
    if (!pos) return 0;
    return parseInt(pos.slice(0, -2));
};
const move = (pos, speed, scale) => {
    if (scale) avatar.style.transform = `scale(${scale},1)`;
    return (pos = `${extractPos(pos) + speed}px`);
};

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
};

window.addEventListener("keyup", function (e) {
    const avSt = avatar.style;
    if (e.key === "ArrowDown" || e.key === "Down") {
        avSt.top = move(avSt.top, 50);
    } else if (e.key === "ArrowUp" || e.key === "Up") {
        avSt.top = move(avSt.top, -50);
    } else if (e.key === "ArrowRight" || e.key === "Right") {
        avSt.left = move(avSt.left, 50, 1);
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
        avSt.left = move(avSt.left, -50, -1);
    }
    if (isTouching(avatar, coin)) {
        moveCoin();
        coinsNumber++;
    }
    coins.innerHTML = coinsNumber;
});
