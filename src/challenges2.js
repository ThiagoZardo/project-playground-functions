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
function triangleCheck(lineA, lineB, lineC) {

  if((lineA > lineB  + lineC) || (lineB > lineA + lineC) || lineC > lineA + lineB){
    return false
  }else{
    return true;
  }
}


// Desafio 13
 //Consegui resolver esse requisito com a ajuda de um tutorial no youtube e da documentação no w3scholl sobre o método replace.
  // A expressão /\D/ localiza tudo o que não é número e substitui por '' O gi é global e o i é para caracteres maiusculos e minusculos.
  //links utilizados:
  //Youtube: https://www.youtube.com/watch?v=id2tW0y7mpY
  //W3School: https://www.w3schools.com/jsref/jsref_replace.asp
function hydrate(string) {
 
  let valorRecebido = string.replace(/\D/gi,'');
  let guardaValor = 0;
  let singular = " copo de água"
  let plural = " copos de água"

  for(let i = 0; i < valorRecebido.length; i+=1){
    guardaValor += parseInt(valorRecebido[i]);
  }
  
  if(guardaValor <= 1){
    return guardaValor + singular;
  }else{
    return guardaValor + plural;
  }
  
}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};






