document.addEventListener('DOMContentLoaded', () => {
    
    // Validación del Formulario de Contacto (Requerimiento del Taller)
    const form = document.getElementById('contact-form');
    const statusMsg = document.getElementById('form-status');

    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (nombre === '' || email === '' || mensaje === '') {
                statusMsg.textContent = 'Por favor, completa todos los campos.';
                statusMsg.style.color = '#e74c3c';
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                statusMsg.textContent = 'Por favor, ingresa un correo electrónico válido.';
                statusMsg.style.color = '#e74c3c';
                return;
            }

            statusMsg.textContent = '¡Mensaje enviado correctamente!';
            statusMsg.style.color = '#2ecc71';
            
            form.reset();
            
            setTimeout(() => {
                statusMsg.textContent = '';
            }, 4000);
        });
    }
});