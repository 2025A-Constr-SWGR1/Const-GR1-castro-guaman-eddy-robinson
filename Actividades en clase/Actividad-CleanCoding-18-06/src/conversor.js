import { Tasas } from '../data/tasas.js';

export function convertirMoneda({ cantidad, origen, destino }) {
    const tasa = Tasas.obtenerTasa(origen, destino);
    if (!tasa) {
        throw new Error(`No hay tasa para convertir de ${origen} a ${destino}`);
    }
    return cantidad * tasa;
}
