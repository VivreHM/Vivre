var slideIndex = 0;
var previousArrow = document.getElementById('previousArrow')
var nextArrow = document.getElementById('nextArrow')
var isPressed = false;
var playing = true;
playSlideShow();
showSlides(slideIndex);

function plusSlides(n) {
    if (slideIndex < 3) {
        isPressed = true;
        showSlides(slideIndex += n);
        pauseSlideShow()

    } else {
        isPressed = true;
        slideIndex = 1;
        showSlides(slideIndex);
        pauseSlideShow()
    }
}

function minusSlides() {
    if (slideIndex > 1) {
        isPressed = true;
        timer = 4000;
        console.log(slideIndex)
        showSlides(slideIndex -= 1);
        pauseSlideShow()
    }
    else {
        isPressed = true;
        timer = 4000
        slideIndex = 3;
        showSlides(slideIndex);
        pauseSlideShow()
    }
}
function pauseSlideShow() {
    playing = false;
    clearInterval(showSlides)
}
function playSlideShow() {
    playing = true;
    setInterval(showSlides, 4000)
}

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }

function showSlides() {
    var i;
    var slides = document.querySelectorAll(".mySlides");
    var timer = 4000;
    //slides[slideIndex-1].style.display = "block"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (!isPressed) {
        slideIndex++;
    }
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    isPressed = false; // Change image every 2 seconds
}