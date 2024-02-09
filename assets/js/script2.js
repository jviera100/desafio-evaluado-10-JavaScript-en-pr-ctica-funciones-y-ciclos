document.addEventListener('DOMContentLoaded', function() {
    const caja = document.getElementById('caja');
    const botones = document.querySelectorAll('button[id^="btn"]');

    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const color = boton.style.backgroundColor;
            caja.style.backgroundColor = color;
        });
    });
});
