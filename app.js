// For In
// For In lê a sequencia de indices ex:

//COM ARRAYS

// const frutas = ['Uva','Pera','Maçã']

// for(let i in frutas){
//     console.log(frutas[i])//Mostrando o que está dentro dos indices do array
// }

//COM OBJETO

const nomes = {
    nome:'Maike',
    sobrenome:'Souza',
    idade: 21
}

// for(let i in nomes){
//     console.log(nomes, nomes[i])//Mostrando o que está contido dentro das propriedades do objeto
// }

// FOR OF SOMENTE COM INTERAVEIS, ARRAY OU STRING

const frutas = ['Uva','Pera','Maçã']

for (let te of frutas){
    console.log(te)
}