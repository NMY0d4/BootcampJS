function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const avatar = document.querySelector("#player");
const extractPos = (pos) => {
    if (!pos) return 0;
    return +pos.slice(0, -2);
};

window.addEventListener("keyup", function (e) {
    if (e.key === "ArrowDown") {
        const currTop = extractPos(avatar.style.top);
        avatar.style.top = `${currTop + 50}px`;
    }
});
