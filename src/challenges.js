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
  let primeiraUltima = ultimaString + ' ' + primeiraString;
  return primeiraUltima;
};

// Desafio 5
function footballPoints(wins,ties) {
  let vitoria = wins * 3;
  let empate =  ties * 1;
  return vitoria+empate; 
}













// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
