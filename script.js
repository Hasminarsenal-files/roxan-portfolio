document.addEventListener('DOMContentLoaded', () => {
  // MOBILE MENU TOGGLE
  const menuBtn = document.querySelector('.menu');
  const navLinksContainer = document.querySelector('.links');
  const navLinks = document.querySelectorAll('.links a');

  menuBtn?.addEventListener('click', () => {
    navLinksContainer?.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer?.classList.remove('open');
    });
  });

  // SCROLLSPY NAVIGATION
  const sections = document.querySelectorAll('section[id], main[id]');

  function updateActiveNavLink() {
    let currentId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href')?.replace('#', '');
      if (href === currentId) {
        link.classList.add('active', 'selected');
      } else {
        link.classList.remove('active', 'selected');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // PRINCIPLES ACCORDION TOGGLE
  const principleCards = document.querySelectorAll('.principle-card');

  principleCards.forEach(card => {
    const header = card.querySelector('.principle-header');
    header?.addEventListener('click', () => {
      const isActive = card.classList.contains('active');

      // Optional: Close all other cards
      principleCards.forEach(c => {
        c.classList.remove('active');
        const icon = c.querySelector('.toggle-icon');
        if (icon) icon.textContent = '+';
      });

      if (!isActive) {
        card.classList.add('active');
        const icon = card.querySelector('.toggle-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // BACK TO TOP BUTTON
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // PLACEHOLDER DOCUMENT BUTTON CLICK NOTIFICATION
  const docBtns = document.querySelectorAll('.doc-btn');
  docBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.getAttribute('href') === '#') {
        e.preventDefault();
        alert('This is a document placeholder. To add your file, update the href attribute in index.html with your PDF link (e.g., href="documents/Assignment_1.pdf").');
      }
    });
  });
});
