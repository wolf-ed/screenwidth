const widthParagraph = document.getElementById('widthId');
const heightParagraph = document.getElementById('heightId');
const btn = document.getElementById('btn');

widthParagraph.innerHTML = window.innerWidth;
heightParagraph.innerHTML = window.innerHeight;

btn.addEventListener('click', () => {
  widthParagraph.innerHTML = window.innerWidth;
  heightParagraph.innerHTML = window.innerHeight;
});
