//TABS UI
var navs = document.querySelectorAll('.menu-items');
// var wraps = document.querySelectorAll('.wrap-item');
var sliders = document.querySelectorAll('.slider-item');

var btns = document.querySelectorAll('.btn');

let currentSlide = 1;

//JS
var manualNav = function(manual){
     sliders.forEach((wrap) => {
          wrap.classList.remove('active');

          btns.forEach((btn) =>{
               btn.classList.remove('active');
          });
          navs.forEach((nav) =>{
               nav.classList.remove('active');
          });
          
     });
     sliders[manual].classList.add('active');
     btns[manual].classList.add('active');
     navs[manual].classList.add('active');
}
btns.forEach((btn,i) => {
     btn.addEventListener("click",() =>{
          manualNav(i);
          currentSlide = i;
     });
});
navs.forEach((nav,i) => {
     nav.addEventListener("click",() =>{
          manualNav(i);
          currentSlide = i;
     });
});
