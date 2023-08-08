let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function updateTime() {
  var now = new Date();
  var day = now.toLocaleDateString('en-US', { weekday: 'long' });
  var date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  var time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  var datetimeElement = document.getElementById('datetime');
  datetimeElement.innerHTML = day + ', ' + date + ' - ' + time;
}

setInterval(updateTime, 1000);

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        plusSlides(1); // Ganti slide foto setelah progress bar selesai
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Dapatkan elemen slide show
  var slideshowContainer = document.querySelector('.slideshow-container');

  // Dapatkan elemen progress bar
  var progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  progressBar.innerHTML = '<div class="progress"></div>';
  slideshowContainer.appendChild(progressBar);

  // Tentukan jumlah total slide
  var totalSlides = 3; // Ganti dengan jumlah slide sesuai kebutuhan Anda

  // Atur event listener untuk slide berubah
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
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Perbarui lebar progress bar
    var progress = (slideIndex / totalSlides) * 100;
    progressBar.querySelector('.progress').style.width = progress + '%';
  }

  // Atur interval untuk otomatis mengganti slide setiap beberapa detik
setInterval(function() {
  move();
  }, 2000);
  });
  // Dengan perubahan tersebut, setelah progress bar selesai, fungsi `move()` akan memanggil fungsi `plusSlides(1)` untuk mengganti slide foto baru. Interval untuk menggerakkan slide foto tetap diatur pada 2 detik.


  const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});




function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimation() {
  var timelineItems = document.querySelectorAll('.container');

  for (var i = 0; i < timelineItems.length; i++) {
    var timelineItem = timelineItems[i];

    if (isElementInViewport(timelineItem)) {
      timelineItem.classList.add('show');
    }
  }
}

window.addEventListener('scroll', handleScrollAnimation);


window.addEventListener('DOMContentLoaded', (event) => {
  var audio = document.getElementById('myAudio');
  audio.play();
});


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// untuk store html

  function redirectToLink(url) {
    window.location.href = url;
  }
  
  // buat toogle menu versi mobile navbar
  // Tambahkan event listener untuk tombol toggle saat di versi mobile
document.querySelector(".menu-icon").addEventListener("click", function () {
  // Toggle class "responsive" untuk membuat tampilan dropdown muncul/sembunyi
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("responsive");
});

// untuk navbar vertical mobile menu hamburger
function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}