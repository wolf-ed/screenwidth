const widthParagraph = document.getElementById('widthId');
const btn = document.getElementById('btn');

console.log('works' + window.innerWidth);

btn.addEventListener('click', () => {
  widthParagraph.innerHTML = window.innerWidth;
});
