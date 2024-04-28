function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateCounter(id, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const counterElement = document.getElementById(id);
  const timer = setInterval(() => {
    current += increment;
    counterElement.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

function startCounterOnScroll() {
  const counters = document.querySelectorAll('.counter-item');
  counters.forEach(counter => {
    if (isElementInViewport(counter) && !counter.dataset.counted) {
      const id = counter.querySelector('.count').id;
      const startValue = parseInt(counter.dataset.start);
      const endValue = parseInt(counter.dataset.end);
      const duration = parseInt(counter.dataset.duration);
      animateCounter(id, startValue, endValue, duration);
      counter.dataset.counted = true; 
    }
  });
}

window.addEventListener('scroll', startCounterOnScroll);

window.addEventListener('DOMContentLoaded', () => {
  startCounterOnScroll(); 
  const counters = document.querySelectorAll('.counter-item');
  let maxDuration = 0;
  counters.forEach(counter => {
    const duration = parseInt(counter.dataset.duration);
    maxDuration = Math.max(maxDuration, duration);
  });
  setTimeout(() => {
    clearInterval(animationTimer);
  }, maxDuration);
});

window.addEventListener('scroll', function() {
  const h1 = document.querySelector('.animate-scroll');
  if (isElementInViewport(h1)) {
      h1.classList.add('animate', 'stay-visible');
  }
  
  const school1 = document.getElementById('school-1');
  const school11 = document.getElementById('school-11');
  if (isElementInViewport(school11)) {
      school1.classList.add('animate');
  }

  const school3 = document.getElementById('school-3');
  const school33 =document.getElementById('school-33');
  if (isElementInViewport(school33)) {
      school3.classList.add('animate-left-to-right');
  } 
  const school4 = document.getElementById('school-4');
  if (isElementInViewport(school4)) {
      school4.classList.add('animate');
  }

  const school6 = document.getElementById('school-6');
  if (isElementInViewport(school6)) {
      school6.classList.add('animate-left-to-right');
  }
});
