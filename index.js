// targetting the Elements
let clickButton = document.getElementById("click");
let colorCode = document.querySelector(".color-code");
let copyButton = document.getElementById("copyButton");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Declarign the functions
clickButton.addEventListener("click", generateCode);
function generateCode() {
  let colorTag = "#";
  for (let i = 0; i < 6; i++) {
    colorTag += hex[returnCode()];
    console.log(colorTag);
  }
  document.body.style = `background:${colorTag}`;
  colorCode.textContent=colorTag;
  colorCode.style.color=colorTag;
};
copyButton.addEventListener("click", ()=>{
  navigator.clipboard.writeText(colorCode.innerText)
})


function returnCode() {
  return Math.floor(Math.random() * hex.length);
}
console.log(returnCode());