function datahora(){
    var container = document.getElementById('container')
    var res = document.getElementById('res')
    var img = document.getElementById('fotos')
    var data = new Date()
    var hora = data.getHours()

    if (hora < 13) {
        img.src = 'manha.png'
        document.body.style.background="#ffdca7"
        res.innerHTML= `A hora atual é ${hora}hrs da manhã do dia ${data}`
    } else if (hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background="#a3b98b"
        res.innerHTML= `A hora atual é ${hora}hrs da tarde`
    } else {
        img.src='noite.png'
        document.body.style.background="#041b2d"
        res.innerHTML= `A hora atual é ${hora}hrs da noite`
    }
}