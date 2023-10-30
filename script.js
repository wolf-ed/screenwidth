const widthParagraph = document.getElementById('widthId');
const heightParagraph = document.getElementById('heightId');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  widthParagraph.innerHTML = window.innerWidth;
});
