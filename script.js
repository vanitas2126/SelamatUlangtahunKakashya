let burung = document.getElementById('burung')
let text = document.getElementById('text')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    burung.style.left = value * 0.25 + 'px';
    text.style.marginBottom = value * 1 + 'px';
  
});