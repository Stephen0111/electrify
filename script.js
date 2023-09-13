const el = document.getElementById('main-nav');

const hiddenDiv = document.getElementById('hide');
const hero = document.getElementById('hero');


el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'inline-block';
    el.style.visibility = 'hidden'


});




hero.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'none';
    el.style.visibility = 'visible';





});