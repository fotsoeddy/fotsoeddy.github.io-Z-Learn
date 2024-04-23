function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
window.addEventListener('scroll', function() {
    const h1 = document.querySelector('.animate-scroll');
    if (isElementInViewport(h1)) {
      h1.classList.add('animate');
    }
  });



  