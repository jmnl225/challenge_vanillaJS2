//구현하고 싶었던것 : createElement()를 사용해서 바디 안에 색을 넣어 그래디언트 완성
//+ css와 html을 배워와야겠어요... 너무 어려워요 ㅠ
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const body = document.querySelector("#body");
const button = document.getElementById("btn");
const ranColour1 = colors[Math.floor(Math.random() * colors.length)];
const ranColour2 = colors[Math.floor(Math.random() * colors.length)];

while (1) {
  if (ranColour1 !== ranColour2) {
    break;
  }
}

const colour1 = document.createElement("bgColour1");
const colour2 = document.createElement("bgColour2");

function setGradient(event) {
  event.preventDefault();
  colour1.value = ranColour1;
  colour2.value = ranColour2;

  body.appendChild(colour1);
  body.appendChild(colour2);

  body.style.background = `linear-gradient(to right, ${colour1.value}, ${colour2.value})`;
  CSS.textContent = body.style.background;
}

if (button) {
  button.addEventListener("click", setGradient);
}
