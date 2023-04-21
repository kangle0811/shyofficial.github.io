const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
    });
  });
  
  const ourElements = document.querySelectorAll('.our');
  ourElements.forEach((el) => observer.observe(el));