function* createIdGenerator() {
  let i = 1;
  while (true) {
    yield i++;
  }
}
const idGenerator = createIdGenerator();
let element = document.getElementById("resultOne");
document.getElementById("generator").addEventListener("click", () => {
  element.innerHTML = idGenerator.next().value;
});

function* newFontGenerator(font) {
  while (true) {
    const i = yield font;
    if (i === "up") {
      font += 2;
    } else if (i === "down") {
      font -= 2;
    }
  }
}
const fontGenerator = newFontGenerator(14);

const increaseButton = document.getElementById("up");
const result = document.getElementById("resultTwo");
increaseButton.addEventListener("click", () => {
  let fontValue = fontGenerator.next().value;
  fontValue = fontGenerator.next("up").value;
  result.setAttribute("style", `font-size: ${fontValue}px`);
});
const decreaseButton = document.getElementById("down");
decreaseButton.addEventListener("click", () => {
  let fontValue = fontGenerator.next().value;
  fontValue = fontGenerator.next("down").value;
  result.setAttribute("style", `font-size: ${fontValue}px`);
});
