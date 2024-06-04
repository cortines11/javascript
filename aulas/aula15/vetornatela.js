let valores = [8, 4 ,5 ,2 ,1, 7]

/*for (let pos = 0; pos < valores.length; pos++){
    console.log ( `A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

