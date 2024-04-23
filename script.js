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
  function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = range / (duration / 10); 
    let timer = setInterval(function() {
      current += increment;
      obj.textContent = Math.round(current); 
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        clearInterval(timer);
      }
    }, 10); 
  }
  
  function startCounterOnScroll() {
    const counters = document.querySelectorAll('.counter-item');
    counters.forEach(counter => {
      if (isElementInViewport(counter)) {
        const id = counter.querySelector('.count').id;
        switch (id) {
          case 'counter-downloads':
            animateValue(id, 0, 200, 2000);
            break;
          case 'counter-staff':
            animateValue(id, 0, 20, 1000);
            break;
          case 'counter-questions':
            animateValue(id, 0, 4000, 2000);
            break;
          case 'counter-partners':
            animateValue(id, 0, 10, 2000);
            break;
        }
      }
    });
  }
  
  window.addEventListener('scroll', startCounterOnScroll);
  
  



  