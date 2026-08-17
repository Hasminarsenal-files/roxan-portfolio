document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const links = document.querySelector('.links');
  const navLinks = document.querySelectorAll('.links a');
  
  menu?.addEventListener('click', () => links?.classList.toggle('open'));
  
  navLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      links?.classList.remove('open');
      navLinks.forEach(link => link.classList.remove('active', 'selected'));
      a.classList.add('active', 'selected');
    });
  });

  const sections = document.querySelectorAll('section[id], main[id]');
  
  function setActiveOnScroll() {
    let currentId = '';
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href')?.replace('#', '');
        if (href === currentId) {
          link.classList.add('active', 'selected');
        } else {
          link.classList.remove('active', 'selected');
        }
      });
    }
  }

  window.addEventListener('scroll', setActiveOnScroll, { passive: true });
  setActiveOnScroll();
});

