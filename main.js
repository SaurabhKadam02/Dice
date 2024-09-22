const imgEL = document.querySelector("img");
function getno1to6() {
  const rn = Math.floor(Math.random() * 6) + 1;
  return rn;
}
function getURL() {
  const words = ["one", "two", "three", "four", "five", "six"];
  const randomword = words[getno1to6()-1];
  const Url = `https://img.icons8.com/windows/300/dice-${randomword}.png`;
  return Url;
}
function getimg() {
  imgEL.src = getURL();
}
