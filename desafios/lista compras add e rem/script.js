var pro = document.querySelector('#pro')
var lista = document.querySelector('#lista')

function adicionar() {

    if (pro.value.length == 0) {
        alert ('Por favor, insira um produto!')
    } else {
        var item = document.createElement('option')
        item.text = `${pro.value}`
        lista.appendChild(item)
        pro.value =''
    }
}

function remover () {

    if (lista.selectedIndex == -1) {
        alert('Por favor, selecione um item para remover')
    } else {
        lista.remove(lista.selectedIndex)
    }
}
