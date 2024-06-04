let num = [5, 8, 2, 9, 3, 1]
num.push(7)
num.sort()
console.log(`${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor de vetor é ${num[0]} `)

let pos = num.indexOf(5)
if (pos == -1) {
    console.log (`O numero que você escolheu não está no vetor`)
} else {
    console.log(`O valor está na posição ${pos}`)
}


