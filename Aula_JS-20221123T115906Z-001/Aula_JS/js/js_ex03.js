var n1, n2, subtração

/*Subtração de valores a partir do usuario*/
n1=prompt("Entre com um valor")
n2=prompt("Entre com outro valor")
subtração=parseInt(n1)-parseInt(n2)
if(subtração>0){
    alert("O resultado da subtração é"+subtração)
}
else{
    ("O programa não permite exibir resultados negativos")
}
