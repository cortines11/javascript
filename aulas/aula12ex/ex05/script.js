function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img=document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
            } else if (idade <=18) {
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade <=55) {
                //adulto
                img.setAttribute('src', 'adultohomem.jpg')
            } else if (idade >=56){
                //idoso
            }
            

        } else if(fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade <=10){
                //criança
            } else if (idade <=18) {
                //jovem
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade <=55) {
                //adulto
                img.setAttribute('src', 'adultomulher.jpg')
            } else if (idade >=56){
                //idoso
            }
        }

        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }   

}