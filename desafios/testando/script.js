document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'phoenix.png',
        'viper.png',
        'jett.png'
    ];
    let currentIndex = 0
    
    const imgElement = document.getElementById('current-image')

    imgElement.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length
        imgElement.src= images[currentIndex]
    })
})

