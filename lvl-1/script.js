// console.log("connected");

let slideIndex = 1;
showSlides(slideIndex);

// Next - Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(s) {
    showSlides(slideIndex = s);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}