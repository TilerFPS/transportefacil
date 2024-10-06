document.getElementById('terminais-onibus').addEventListener('change', function() {
    var terminal = this.value;
    var statusOnibus = document.getElementById('status-onibus');

    if (terminal === 'terminal1') {
        statusOnibus.textContent = 'Atrasos em algumas linhas';
    } else if (terminal === 'terminal2') {
        statusOnibus.textContent = 'Operando normalmente';
    } else if (terminal === 'terminal3') {
        statusOnibus.textContent = 'Suspenso temporariamente';
    }
});

document.getElementById('locais-kombi').addEventListener('change', function() {
    var local = this.value;
    var statusKombi = document.getElementById('status-kombi');

    if (local === 'local1') {
        statusKombi.textContent = 'Operação reduzida';
    } else if (local === 'local2') {
        statusKombi.textContent = 'Operando normalmente';
    } else if (local === 'local3') {
        statusKombi.textContent = 'Operação suspensa';
    }
});
