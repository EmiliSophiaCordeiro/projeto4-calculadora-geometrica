// Definição de pi
let pi = 3.14;

// Função para calcular a área do triângulo
function triangulo() {
  let baseT = prompt("Qual a base do triângulo?");
  baseT = Number(baseT); // Converte a entrada para número
  let alturaT = prompt("Qual a altura do triângulo?");
  alturaT = Number(alturaT); // Converte a entrada para número
  
  // Verifica se os valores são positivos
  if (baseT > 0 && alturaT > 0) {
    alert(`A área do triângulo é: ${baseT * alturaT / 2}`);
  } else {
    alert("Não há área negativa.");
  }
}

// Função para calcular a área do retângulo
function retangulo() {
  let baseR = prompt("Qual a base do retângulo?");
  baseR = Number(baseR); // Converte a entrada para número
  let alturaR = prompt("Qual a altura do retângulo?");
  alturaR = Number(alturaR); // Converte a entrada para número

  // Verifica se os valores são positivos
  if (baseR > 0 && alturaR > 0) {
    alert(`A área do retângulo é: ${baseR * alturaR}`);
  } else {
    alert("Não há área negativa.");
  }
}

// Função para calcular a área do quadrado
function quadrado() {
  let ladoQ = prompt("Qual o lado do quadrado?");
  ladoQ = Number(ladoQ); // Converte a entrada para número

  // Verifica se o valor do lado é positivo
  if (ladoQ > 0) {
    alert(`A área do quadrado é: ${ladoQ * ladoQ}`);
  } else {
    alert("Não há área negativa.");
  }
}

// Função para calcular a área do trapézio
function trapezio() {
  let baseMaiorT = prompt("Qual a base maior do trapézio?");
  baseMaiorT = Number(baseMaiorT); // Converte a entrada para número
  let baseMenorT = prompt("Qual a base menor do trapézio?");
  baseMenorT = Number(baseMenorT); // Converte a entrada para número
  let alturaT = prompt("Qual a altura do trapézio?");
  alturaT = Number(alturaT); // Converte a entrada para número

  // Verifica se todos os valores são positivos
  if (baseMaiorT > 0 && baseMenorT > 0 && alturaT > 0) {
    alert(`A área do trapézio é: ${(baseMaiorT + baseMenorT) * alturaT / 2}`);
  } else {
    alert("Não há área negativa.");
  }
}

// Função para calcular a área do círculo
function circulo() {
  let raioC = prompt("Qual o raio do círculo?");
  raioC = Number(raioC); // Converte a entrada para número

  // Verifica se o valor do raio é positivo
  if (raioC > 0) {
    alert(`A área do círculo é: ${pi * (raioC * raioC)}`);
  } else {
    alert("Não há área negativa.");
  }
}

// Laço principal para o menu
while (true) {
  let escolha = prompt("O que você deseja fazer? \n1 - Área do triângulo \n2 - Área do retângulo \n3 - Área do quadrado \n4 - Área do trapézio \n5 - Área do círculo");

  switch (escolha) {
    case "1":
      triangulo();
      break;
    case "2":
      retangulo();
      break;
    case "3":
      quadrado();
      break;
    case "4":
      trapezio();
      break;
    case "5":
      circulo();
      break;
    default:
      alert("Opção inválida!");
      break;
  }
}
