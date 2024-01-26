var saldoDerrotas = 0;
var saldoVitorias = 0;

function resultado1() {
    saldoVitorias = parseInt(document.getElementById('vitorias').value);
    saldoDerrotas = parseInt(document.getElementById('derrotas').value);
    resultado(saldoVitorias, saldoDerrotas);
}

function resultado(saldoVitorias, saldoDerrotas) {
    let diff = saldoVitorias - saldoDerrotas;
    let nivel;

    if (diff < 10) {
        nivel = 1;
    } else if (diff < 20) {
        nivel = 2;
    } else if (diff < 50) {
        nivel = 3;
    } else if (diff < 80) {
        nivel = 4;
    } else if (diff < 90) {
        nivel = 5;
    } else if (diff < 100) {
        nivel = 6;
    } else {
        nivel = 7;
    }

    document.getElementById('result').textContent = `O Herói tem de saldo de ${diff} está no nível de ${nivel}`;
}