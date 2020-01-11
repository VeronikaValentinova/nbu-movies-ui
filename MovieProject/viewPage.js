// var swiper = new Swiper('.blog-slider', {
//     spaceBetween: 30,
//     effect: 'fade',
//     loop: true,
//     mousewheel: {
//       invert: false,
//     },
//     // autoHeight: true,
//     pagination: {
//       el: '.blog-slider__pagination',
//       clickable: true,
//     }
//   });


  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//
let container = document.getElementById('select-container');
let items = container.getElementsByTagName('ul')[0].getElementsByTagName('li');
let selectedItem = items[0];

hideSelected();

function onSelect(item) {
  showUnselected();
  selectedItem.innerHTML = item.innerHTML;
  selectedItem.setAttribute('lang-selection', item.getAttribute('lang-selection'))
  selectedItem.setAttribute('tooltip', item.getAttribute('tooltip'))
  hideSelected();
  unwrapSelector();
}

function unwrapSelector() {
  container.style.pointerEvents = "none";
  setTimeout(() => container.style.pointerEvents = "auto", 200)
}

function showUnselected() {
  let selectedLangCode = selectedItem.getAttribute('lang-selection')
  
     for (let i = 1; i < items.length; i++) {
       if (items[i].getAttribute('lang-selection') == selectedLangCode) {
         items[i].style.opacity = '1';
         items[i].style.display = '';
         break;
       }
     }
}

function hideSelected() {
  let selectedLangCode = selectedItem.getAttribute('lang-selection')
  
     for (let i = 1; i < items.length; i++) {
       if (items[i].getAttribute('lang-selection') == selectedLangCode) {
         items[i].style.opacity = '0';
         setTimeout(() => items[i].style.display = 'none', 200)
         break;
       }
     }
}