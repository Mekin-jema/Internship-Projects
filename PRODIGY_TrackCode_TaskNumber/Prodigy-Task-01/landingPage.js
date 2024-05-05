window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  if (window.scrollY > 0) {
    nav.style.backgroundColor = 'rgba(0, 0, 255, 0.8)'; // Change background color on scroll
  } else {
    nav.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
  }
});
