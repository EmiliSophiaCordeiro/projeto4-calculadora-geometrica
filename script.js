//área do triângulo: base * altura / 2
//área do retângulo: base * altura
//área do quadrado: lado²
//área do trapézio: (base maior + base menor) * altura / 2
//área do círculo: pi * raio² (considere pi = 3.14)
        //triângulo
let trianguloBase = parseInt(prompt('digite uma base do triângulo:'))
let trianguloAltura = parseInt(prompt('digite uma altura do triângulo:'))
//retângulo
let retanguloBase = parseInt(prompt('digite uma base do retângulo:'))
let retanguloAltura = parseInt(prompt('digite uma altura do retângulo:'))
//quadrado
let quadradoLado = parseInt(prompt('digite um lado do quadrado:'))
//trapézio
let trapezioBm = parseInt(prompt('digite uma base maior do trapézio:'))
let trapezioBn = parseInt(prompt('digite uma base menor do trapézio:'))
let trapezioAltura = parseInt(prompt('digite uma altura do trápezio:'))
//círculo
let circuloRaio = parseInt(prompt('digite um raio do círculo:'))
let circuloPi = parseInt(3.14)
//resoluçao
alert(`área do triângulo é: ${trianguloBase*trapezioAltura/2}, \n
área do retângulo é: ${retanguloBase*retanguloAltura},\n
área do quadrado é: ${quadradoLado*quadradoLado},\n
área do trapézio é: ${(trapezioBm+trapezioBn)*trapezioAltura/2},\n
área do círculo é: ${circuloPi*(circuloRaio*circuloRaio)}`)