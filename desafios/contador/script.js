function calcular(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtn')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length ==0 || fim.value.length == 0 || pas.value.length ==0) {
        alert('ERRO! Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if(i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
