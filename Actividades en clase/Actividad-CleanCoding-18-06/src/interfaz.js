import { convertirMoneda } from './conversor.js';

export function inicializarInterfaz() {
    const formulario = document.getElementById('formulario');
    const resultadoElemento = document.getElementById('resultado');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        console.log('Formulario enviado');

        const cantidad = parseFloat(formulario.cantidad.value);
        const origen = formulario.origen.value;
        const destino = formulario.destino.value;

        try {
            const resultado = convertirMoneda({ cantidad, origen, destino });
            resultadoElemento.textContent = `Resultado: ${resultado.toFixed(2)} ${destino}`;
        } catch (error) {
            resultadoElemento.textContent = `Error: ${error.message}`;
        }
    });
}
