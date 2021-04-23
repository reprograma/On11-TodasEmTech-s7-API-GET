const alunas = ["Júlia", "Mari", "Anaísa", "Dani", "Jéssica"];

// var ==> funções globais. 
// o valor da variável vai ser modificado? Não. Então utiliza const.
// o valor da variável vai ser modificado? Sim. Então utiliza let.

//Trazer o primeiro nome da lista de alunas
//console.log(alunas[0]);

// Procurar a aluna com o nome Júlia 
//console.log(alunas.indexOf("Júlia"));

//Procurar a aluna com a letra J
//length --> percorre todo o array e verifica o tamanho do array 

//console.log( "Sem o for", alunas[0].includes("J"))

//Estrutura de repetição --> nos auxilia para verificar, incrementar, algum tipo de condição.
//  for(let i = 0; i < alunas.length; i ++){
//     let retornarJ =  alunas[i].includes("J");

//     if( retornarJ == true){
//       const retornarNome = alunas[i]
//       console.log(retornarNome)
//     }
//  }

//  alunas.forEach(aluna => {
//    let retornarJ = aluna.includes("J");
//    if(retornarJ == true){
//      const retornarNome = aluna;
//      return retornarNome;
//    }
//  });

//  const alunasFiltro = alunas.filter(aluna => {
//    return aluna.includes("J")
//  })

//  console.log(alunasFiltro);

// // pegar o Estado e em seguida a Silga, nome e cidade.
// const data = [
//   {
//   "estados": [
//     {
//       "sigla": "AC",
//       "nome": "Acre",
//       "cidades": [
//         "Acrelândia",
//         "Assis Brasil",
//         "Brasiléia"
//         ]
//       }
//     ]
//   }
// ]

// for(let i = 0; i < data.length; i++){
//   for( let j = 0; j < data[i].estados.length; j++) {
//     console.log(data[i].estados[j].cidades.join());
//   } 
// }


