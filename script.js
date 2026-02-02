// Case study carousel
const caseStudies = document.querySelectorAll('.case-study');
const dots = document.querySelectorAll('.case-dots .dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  caseStudies.forEach((s, i) => {
    s.classList.toggle('active', i === index);
  });
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  showSlide((currentSlide + 1) % caseStudies.length);
}

function startCarousel() {
  slideInterval = setInterval(nextSlide, 5000);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    clearInterval(slideInterval);
    startCarousel();
  });
});

// Mobile menu
const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

mobileBtn?.addEventListener('click', () => {
  nav?.classList.toggle('open');
  mobileBtn.textContent = nav?.classList.contains('open') ? '✕' : '☰';
});

// Close mobile menu on link click
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    mobileBtn.textContent = '☰';
  });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  if (scroll > 100) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
  lastScroll = scroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Init
showSlide(0);
startCarousel();
