document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const nombreInput = document.getElementById('nombre');
    const asuntoInput = document.getElementById('asunto');
    const mensajeInput = document.getElementById('mensaje');
    const mensajeResultado = document.querySelector('.resultado');
    const secundariasDiv = document.getElementById('secundarias');

    // Aplicar estilos CSS para centrar los enlaces
    secundariasDiv.style.textAlign = 'center';
    secundariasDiv.style.marginTop = '20px'; // Espacio arriba para separar del contenido principal

    // Seleccionar los elementos <ul> y <li> dentro del div
    const ul = secundariasDiv.querySelector('ul');
    const lis = ul.querySelectorAll('li');

    // Aplicar estilos a la lista y a los elementos de la lista
    ul.style.listStyleType = 'none';
    ul.style.padding = '0';

    lis.forEach(li => {
        li.style.display = 'inline-block'; // Mostrar en línea
        li.style.marginRight = '20px'; // Espacio entre elementos
    });

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        // Expresión regular para validar caracteres alfabéticos
        const regex = /^[A-Za-z\s]+$/;

        // Validación del nombre
        if (!nombreInput.value.match(regex)) {
            mensajeResultado.textContent = 'Error: Ingresa un nombre válido.';
            mensajeResultado.style.color = 'red';
        } else if (!asuntoInput.value.match(regex)) { // Validación del asunto
            mensajeResultado.textContent = 'Error: Ingresa un asunto válido.';
            mensajeResultado.style.color = 'red';
        } else if (!mensajeInput.value.match(regex)) { // Validación del mensaje
            mensajeResultado.textContent = 'Error: Ingresa un mensaje válido.';
            mensajeResultado.style.color = 'red';
        } else { // Si todo es válido
            mensajeResultado.textContent = 'Formulario enviado correctamente.';
            mensajeResultado.style.color = 'green';
        }
    });
});
