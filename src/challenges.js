// Desafio 1
function compareTrue(val1, val2) {
  if(val1 === true && val2 === true){
    return true;
  }else{
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area;
};

// Desafio 3
function splitSentence(string) {
  let separador = string.split(' ')
  return separador;
};

// Desafio 4
function concatName(arrayStrings) {
  let primeiraString = arrayStrings[0];
  let ultimaString = arrayStrings[arrayStrings.length-1];
  let primeiraUltima = ultimaString + ', ' + primeiraString;
  return primeiraUltima;
};

// Desafio 5
function footballPoints(wins,ties) {
  let vitoria = wins * 3;
  let empate =  ties * 1;
  return vitoria + empate;
}

// Desafio 6
//Consegui esse desafio com a ajuda da Sheila durante grupo de estudos de madrugada.
function highestCount(array) {
  let valorMaior = array[0];
  let contador = 0;

  for(let i = 0; i < array.length; i+=1){
    if(array[i] > valorMaior){
      valorMaior = array[i];
    } 
  }

  for(let c = 0; c < array.length; c+=1){
     if(valorMaior === array[c]){
       contador = contador+1;
     }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
//Para resolver esse teste busquei na internet e encontrei o site: https://ichi.pro/pt/algoritmo-javascript-gatos-e-um-rato-278592971346362 nesse site utilizei as 2 primeiras linhas, utilizando o comando Math.abs() que eu não conhecia ainda, e que retorna um valor absoluto, ou seja retorna positivo no lugar de negativo.

  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);
  
  if(gato1 < gato2){
    return 'cat1'
  }else if(gato1 > gato2){
    return 'cat2'
  } else{
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let string = [];

  for (let i = 0; i < array.length; i+=1){
    
    if((array[i] % 3 !== 0) && (array[i] % 5!== 0)){
      string.push('bug!');
    } else if((array[i] % 3 == 0) && (array[i] % 5 == 0)){
      string.push('fizzBuzz');
    } else if(array[i] % 3 == 0){
      string.push('fizz');
    } else if(array[i] % 5 == 0){
      string.push('buzz');
    }
  };
  
  return string;    
};

// Desafio 9
//Este desafio recebi ajuda do Victor Tavares na lógica do grupo de sábado a tarde.
function encode(criptografia) {
  let codigo = '';
  for(let i = 0; i < criptografia.length; i+=1){
    if(criptografia[i] == 'a'){
      codigo += 1; 
    }else if(criptografia[i] == 'e'){
      codigo += 2;
    }else if(criptografia[i] == 'i'){
      codigo += 3;
    } else if(criptografia[i] == 'o'){
      codigo += 4;
    } else if(criptografia[i] == 'u'){
      codigo += 5;
    }else{
      codigo += criptografia[i];
    }
  }
  return codigo;
}


function decode(codigo) {
  // seu código aqui
  let codigoRevelado = '';
  for(let c = 0; c < codigo.length; c+=1){
    if(codigo[c] == 1){
      codigoRevelado += 'a'; 
    }else if(codigo[c] == 2){
      codigoRevelado += 'e';
    }else if(codigo[c] == 3){
      codigoRevelado += 'i';
    } else if(codigo[c] == 4){
      codigoRevelado += 'o';
    } else if(codigo[c] == 5){
      codigoRevelado += 'u';
    }else{
      codigoRevelado += codigo[c];
    }
  }
  return codigoRevelado;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
