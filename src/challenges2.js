// Desafio 10
function techList(array, name) {
  // seu código aqui
  let tecnologias = [];
  let retornaVazio = 'Vazio!'
  if (array == ''){
    return retornaVazio;
  }else{
    for(let i = 0; i < array.length; i+=1){
      array.sort();  
      tecnologias.push(
          { 
            tech: array[i],
            name: name,
          },   
        ); 
      }; 
    return tecnologias;
  }
}  

// Desafio 11
function generatePhoneNumber(array) {
  //Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11
  let numeroDiferente = 'Array com tamanho incorreto.'
    if(array.length !== 11){
    return numeroDiferente;
  }

// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0
// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array seja maior que 9
  for(let inesistente = 0; inesistente < array.length; inesistente+=1){
    let numeroMaiorOuMenor = 'não é possível gerar um número de telefone com esses valores'
    if((array[inesistente] > 9) || (array[inesistente] < 0)){
      return numeroMaiorOuMenor;
    }
  }

// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais
//Para essa parte do projeto, tive ajuda do Roberval que me ajudou a entender a lógica de um for dentro de outro.
  for(let repeticao = 0; repeticao < array.length; repeticao +=1){
    let erroRepeticao = 'não é possível gerar um número de telefone com esses valores'
    let numeroRepete = array[repeticao];
    let quantidadeRepeticao = 0;
    for(let i = 0; i < array.length; i+=1){
      if(array[i] === numeroRepete){
        quantidadeRepeticao +=1;
      }
    }
    if(quantidadeRepeticao >= 3){
      return erroRepeticao;
    }
  }
  

// Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array estejam de acordo com as especificações
  let ddd = '(' + array[0].toString() + array[1].toString() + ') ' ;
  let traco = array[2].toString() + array[3].toString() + array[4].toString() + array[5].toString() + array[6].toString() + '-'  + array[7].toString() + array[8].toString() + array[9].toString() + array[10];

  return ddd + traco; 

}
  

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};






