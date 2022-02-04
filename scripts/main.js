AOS.init();

// typed.js
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  loop:true,
  shuffle:true,
  typeSpeed:200,
  backSpeed: 150,
});


/* particles.js*/
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});