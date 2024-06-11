function calcular () {
    var tabu = document.getElementById("txttabu")
    var apresent = document.getElementById('numero')
    var res = document.getElementById('res')
    var tabela = document.getElementById('tabela')

    if (tabu.value.length == 0) {
        alert('INSIRA UM NÚMERO')
    } else {
        apresent.innerHTML = `O número escolhido foi ${tabu.value}`
        var tab = Number(tabu.value)

        for (var c = 1; c <= 10; c++ ) {
            var option = document.createElement('option')
            option.text += `${tab} X ${c} = ${tab*c}`
            res.add(option)
            
        }
    }

}