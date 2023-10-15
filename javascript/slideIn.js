const items = document.querySelectorAll('.item');

const options = {
    threshold: 0.20
  }

  function addSlideIn(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
      }
    });
  }
  
  const observer = new IntersectionObserver(addSlideIn, options)
  
  items.forEach(item => {
    observer.observe(item);
  })