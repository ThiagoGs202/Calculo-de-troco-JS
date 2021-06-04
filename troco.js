function calculaNotas(troco) {
    var notas = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10];
    var texto = '';
    for (var x = 0; x < notas.length; x++) {
        if (troco >= notas[x]) {
            var div = Math.floor(troco / notas[x]);
            texto += div + " notas de " + notas[x] + "\n";
            troco -= div * notas[x];
        }

    }
    return texto;
}
