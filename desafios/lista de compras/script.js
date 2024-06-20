function adicionar() {
    var pro = document.getElementById('prod')
    var res = document.getElementById('res')
    var lista = document.getElementById('lista')

    if (pro.value.length == 0) {
        alert ('Por favor, insira um item')  
    } else {
    
        var itemlista = document.createElement('option')
        itemlista.text = `${pro.value}`
        lista.appendChild(itemlista)
        pro.value =''
    }
}