var images = [
    'phoenix.png',
    'viper.png',
    'jett.png'
];


function nomedop(){
    var nomep = document.getElementById('current-image')
    if( images = [0]){
    document.write = ('Phoenix')
    }
}


document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0
    
    var imgElement = document.getElementById('current-image')

    imgElement.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length
        imgElement.src= images[currentIndex]
    })
})


