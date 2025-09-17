// main.js - Project 9: Countdown + Slideshow

/* =======================
   COUNTDOWN FUNCTION
   ======================= */
function countdown() {
  // read user input
  var seconds = Number(document.getElementById("seconds").value);
  var timerEl = document.getElementById("timer");

  // inner function runs each second
  function tick() {
    seconds = seconds - 1; // decrease time
    timerEl.innerHTML = seconds + "s"; // show remaining seconds

    // keep ticking until zero, then notify
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      alert("Countdown finished!");
      timerEl.innerHTML = "Done!";
    }
  }
  tick(); // start ticking
}

/* =======================
   SLIDESHOW LOGIC
   ======================= */
let slideIndex = 1; // which slide is visible
showSlides(slideIndex); // show first slide

// next/prev buttons
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// dot controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// core show/hide function
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // wrap around on edges
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // deactivate all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // show current slide & activate its dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}