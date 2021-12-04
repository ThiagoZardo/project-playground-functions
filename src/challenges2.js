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

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'Lucas'))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
