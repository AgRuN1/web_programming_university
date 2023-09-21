const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
    }
    
    function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
    }
    
    function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
        slide.style.display = 'block';
        } else {
        slide.style.display = 'none';
        }
    });
    }

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
updateSlider();


document.querySelector('.show').onclick = function(event) {
    var attr = event.srcElement.getAttribute('data-dialog');
    document.querySelector('#dialog-' + attr).show();
};
document.querySelector('.close').onclick = function(event) {
    var attr = event.srcElement.getAttribute('data-dialog');
    document.querySelector('#dialog-' + attr).close();
};