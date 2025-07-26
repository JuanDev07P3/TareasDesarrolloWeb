window.addEventListener('load', function() {
    alert('¡Bienvenido a mi mini sitio web!');
});

document.addEventListener('DOMContentLoaded', function() {
    const botonTema = document.getElementById('cambiarTema');
    const body = document.body;
    body.classList.add('claro'); // Tema claro por defecto

    botonTema.addEventListener('click', function() {
        if (body.classList.contains('claro')) {
            body.classList.remove('claro');
            body.classList.add('oscuro');
            botonTema.textContent = 'Tema claro';
        } else {
            body.classList.remove('oscuro');
            body.classList.add('claro');
            botonTema.textContent = 'Tema oscuro';
        }
    });
});