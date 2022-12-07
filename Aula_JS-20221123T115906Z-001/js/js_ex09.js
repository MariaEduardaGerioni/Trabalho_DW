/*Funções sem retorno*/
function somar(n1, n2){
    var resultado
    resultado=n1+n2
    alert("Função soma sem retono"+resultado)
}
/* Funções com retorno*/
function subtrair(n1, n2)
{
    var resultado
    resultado=n1-n2
    return(resultado)
}
somar(35,10)
somar(8, 7)

var r
r=subtrair(14, 8)
alert("Função subtrair foi chamada e retornoi o seguinte resultado"+r)