
/* Variáveis que vão guardar os elementos HTML */


var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo") /* Leonardo 1° Elemento */
/*            |  pegar o elemento Leonardo  |             */
var Samantha = window.document.getElementById("Samantha") /* Samantha 2° Elemento */
var Bruna = window.document.getElementById("Bruna") /* Bruna 3° Elemento */
var setaEquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Leonardo.style = "display: none"
    Bruna.style = "display: flex"
    setaDireita.style = "display: none"
    setaEquerda.style ="display: flex"
}

function RolarParaEsquerda(){
    Bruna.style = "display: none"
    Leonardo.style = "display: flex"
    setaDireita.style = "display: flex"
    setaEquerda.style ="display: none"
}



/* ATA de Aula / Observações

- Sempre evitar traços e simbolos em JS, separar por letra Maiuscula

- No Carrosel deste projeto só foi utilizado os elementos Leonardo e Bruna,
sendo o Elemento Samantha flutuador




*/

