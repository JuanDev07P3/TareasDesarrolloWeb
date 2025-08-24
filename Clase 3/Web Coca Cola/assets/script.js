
document.addEventListener('DOMContentLoaded', () => {
  // Resaltar enlace activo
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Toggle "Leer más" en noticias
  document.querySelectorAll('.news-item').forEach(item => {
    const btn = item.querySelector('.toggle');
    const more = item.querySelector('.more');
    if (btn && more) {
      btn.addEventListener('click', () => {
        const visible = more.style.display === 'block';
        more.style.display = visible ? 'none' : 'block';
        btn.textContent = visible ? 'Leer más' : 'Leer menos';
      });
    }
  });

  // Filtros de productos
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('[data-category]');
  if (filterButtons.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        productCards.forEach(card => {
          card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
        });
      });
    });
  }

  // Validación del formulario de contacto
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#nombre').value.trim();
      const email = form.querySelector('#correo').value.trim();
      const subject = form.querySelector('#asunto').value.trim();
      const msg = form.querySelector('#mensaje').value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      let errors = [];
      if (name.length < 2) errors.push('El nombre es requerido.');
      if (!emailOk) errors.push('Correo inválido.');
      if (subject.length < 3) errors.push('El asunto es requerido.');
      if (msg.length < 5) errors.push('El mensaje es muy corto.');

      const feedback = form.querySelector('#form-feedback');
      if (errors.length) {
        feedback.className = 'notice';
        feedback.textContent = 'Por favor corrige: ' + errors.join(' ');
      } else {
        feedback.className = 'notice';
        feedback.textContent = '¡Gracias! Tu mensaje ha sido enviado (simulado para fines académicos).';
        form.reset();
      }
    });
  }
});
