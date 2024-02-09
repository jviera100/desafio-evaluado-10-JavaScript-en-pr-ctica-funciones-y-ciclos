document.addEventListener('DOMContentLoaded', function() {
    const valor1Input = document.getElementById('valor1');
    const valor2Input = document.getElementById('valor2');
    const resultadoSpan = document.querySelector('.resultado');
    const btnSumar = document.getElementById('btn-sumar');
    const btnRestar = document.getElementById('btn-restar');

    btnSumar.addEventListener('click', function() {
        const valor1 = parseFloat(valor1Input.value);
        const valor2 = parseFloat(valor2Input.value);
        const suma = valor1 + valor2;
        resultadoSpan.textContent = suma;
    });

    btnRestar.addEventListener('click', function() {
        const valor1 = parseFloat(valor1Input.value);
        const valor2 = parseFloat(valor2Input.value);
        const resta = valor1 - valor2;
        resultadoSpan.textContent = resta >= 0 ? resta : 0;
    });
});
