function contar() {
    var ini = document.getElementById('txtn')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO] INSIRA UM NÚMERO VÁLIDO!')
    } else {
        res.innerHTML = `Contando:`
    }

    var inic = Number(ini.value)
    var fi = Number(fim.value)
    var pa = Number(pas.value)

    if (fi > inic){
    for (var c = inic; c <= fi; c+= pa) {
        res.innerHTML += `${c} `
    }
    } else {
    for (var c = inic; c >= fi; c-= pa){
        res.innerHTML += `${c} `
    }}
}
