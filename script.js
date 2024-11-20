//área do triângulo: base * altura / 2
//área do retângulo: base * altura
//área do quadrado: lado²
//área do trapézio: (base maior + base menor) * altura / 2
//área do círculo: pi * raio² (considere pi = 3.14)

//variaveis
let pi = 3.14
//triângulo
function(triangulo){
  let baseT = prompt("Qual a base do triângulo?")
  baseT = number(baseT)
  let alturaT = prompt("Qual a altura do triângulo?")
  alturaT = number(alturaT)
        if (baseT * alturaT / 2 > 0) {
        alert(`A área do triângulo é: ${baseT * alturaT / 2}`)
    } else {
        alert("Não há área negativa.")
    }
    
//retângulo
function(retângulo){
  let baseR = prompt("Qual a base do retângulo?")
  baseR = number(baseR)
  let alturaR = prompt("Qual a altura do retângulo?")
  alturaR = number(baseR)
        if (baseR * alturaR > 0) {
        alert(`A área do retângulo é: ${baseR * alturaR}`)
    } else {
        alert("Não há área negativa.")
    }
//quadrado
function(quadrado){
  let ladoQ = prompt("Qual o lado do quadrado?")
  ladoQ = number(ladoQ)
        if (ladoQ * ladoQ > 0) {
        alert(`A área do quadrado é: ${ladoQ * ladoQ}`)
    } else {
        alert("Não há área negativa.")
    }
//trapézio
function(trapezio){
  let baseMaiorT = prompt("Qual a base maior do trapézio?")
  baseMaiorT = number(baseMaiorT)
  let baseMenorT = prompt("Qual a base menor do trapézio?")
  baseMenorT = number(baseMenorT)
  let alturaT = prompt("Qual a altura do trapézio?")
  alturaT = number(alturaT)
        if ((baseMaiorT + baseMenorT) * alturaT /2 > 0) {
        alert(`A área do trapézio é: ${(baseMaiorT + baseMenorT) * altura / 2}`)
    } else {
        alert("Não há área negativa.")
    }
//círculo
 function(círculo){
  let raioC = prompt("Qual o raio do círculo?")
  raioC = number(raioC)
         if ( pi * (raioC * raioC) > 0) {
        alert(`A área do círculo é: ${ pi * (raioC * raioC)}`)
    } else {
        alert("Não há área negativa.")
    }
//resoluçao
 while (true) {
    //menu
         switch (prompt("O que você deseja fazer? \n1 - Àrea do triângulo \n2 - Área do retângulo \n3 - Área do quadrado \n4 - Área do trapézio \n5 - Área do círculo ")) {
    case "1": 
        triangulo()
        break
    case "2": 
        retangulo()
        break
    case "3": 
        quadrado()
        break
    case "4": 
      trapezio()
        break
        case "5":
        circulo()       
        break
        default:
}}

