(function () {
  'use strict';
  var header = document.getElementById('top-head');
  var toggle = document.getElementById('nav-toggle');
  if (header && toggle) {
    var toggleMenu = function () { header.classList.toggle('open'); };
    toggle.addEventListener('click', toggleMenu);
    toggle.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); }
    });
  }
  var slides = Array.prototype.slice.call(document.querySelectorAll('#slide-main li'));
  var current = 0;
  if (slides.length > 1) {
    slides.forEach(function (slide, i) { slide.style.display = i === 0 ? 'block' : 'none'; if (i === 0) slide.style.position = 'relative'; });
    var first = Math.floor(Math.random() * slides.length);
    current = first;
    slides.forEach(function (slide, i) { slide.style.display = i === current ? 'block' : 'none'; slide.style.position = i === current ? 'relative' : 'absolute'; });
    setInterval(function () { slides[current].style.display = 'none'; slides[current].style.position = 'absolute'; current = (current + 1) % slides.length; slides[current].style.display = 'block'; slides[current].style.position = 'relative'; }, 5000);
  }
  var parallax = document.querySelectorAll('[data-paroller-factor]');
  var updateParallax = function () {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    Array.prototype.forEach.call(parallax, function (el) {
      var rect = el.getBoundingClientRect();
      var factor = parseFloat(el.getAttribute('data-paroller-factor')) || 0;
      var offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * factor * -0.12;
      el.style.backgroundPosition = 'center calc(50% + ' + offset.toFixed(1) + 'px)';
    });
  };
  window.addEventListener('scroll', updateParallax, { passive: true });
  window.addEventListener('resize', updateParallax);
  updateParallax();
  var homeLinks = document.querySelectorAll('[data-home-link="true"]');
  Array.prototype.forEach.call(homeLinks, function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var isGithubPages = /(^|\.)github\.io$/.test(window.location.hostname);
      window.location.href = isGithubPages ? '/team-gp/' : '/';
    });
  });
  var topLink = document.querySelector('#pagetopBtn a');
  if (topLink) {
    topLink.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }
})();
