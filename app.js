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

const avatar = document.querySelector("#player");
avatar.style.top = "100px";
avatar.style.left = "100px";

const extractPos = (pos) => {
    if (!pos) return 0;
    return parseInt(pos.slice(0, -2));
};
const move = (pos, speed, scale) => {
    if (scale) avatar.style.transform = `scale(${scale},1)`;
    return (pos = `${extractPos(pos) + speed}px`);
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
});
