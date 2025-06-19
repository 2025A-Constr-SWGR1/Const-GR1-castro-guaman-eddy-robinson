// Módulo para encapsular las tasas de cambio
export const Tasas = {
    USD_EUR: 0.91,
    USD_GBP: 0.78,
    EUR_USD: 1.1,
    EUR_GBP: 0.86,
    GBP_USD: 1.28,
    GBP_EUR: 1.16,

    obtenerTasa(monedaOrigen, monedaDestino) {
        const clave = `${monedaOrigen}_${monedaDestino}`;
        return this[clave];
    }
};
