// menu item navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll section active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });
    };
  });

// Sticky navbar
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

// remove menu icon navbar when click navbar link
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


// Scroll reveal

ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.banner, .home-img, .container, .portfolio, .img-gallery img, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .content', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .about-heading, video', { origin: 'right' });