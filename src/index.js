const tasas = { USD: 1, EUR: 0.85, COP: 3150 };

function convertidor(origen, destino, cantidad) {
    if (!(origen in tasas) || !(destino in tasas)) {
        throw new Error("Moneda no soportada");
    }
    if (typeof cantidad !== "number" || cantidad < 0) {
        throw new Error("Cantidad inválida");
    }
    const resultado = (cantidad / tasas[origen]) * tasas[destino];
    return Math.round(resultado * 100) / 100;
}

module.exports = convertidor;
