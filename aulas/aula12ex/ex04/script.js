function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#ffdca7'
    }  else if (hora < 18) {
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#a3b98b'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#041b2d'
    }
    }




