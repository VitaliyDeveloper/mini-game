const board = document.querySelector("#board");
const colors = ["red", "green", "purple", "yellow", "pink", "orange"];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(el) {
  const color = getRamdomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.boxShadow = `0 0 2px #000`;
  el.style.backgroundColor = "#1d1d1d";
}

function getRamdomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
