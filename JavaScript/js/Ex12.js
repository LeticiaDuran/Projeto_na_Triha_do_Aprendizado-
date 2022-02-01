//Funções sem retorno
function somar(n1,n2){
    var r 
    r=n1+n2
    alert("Função de soma sem retorno!O resultado é:"+r)
}


somar(10,5)

//Função com retorno
function subtrair(n1,n2)
{
    var r
    r=n1-n2
    return(r)
}

var resultado
resultado=subtrair(10,5)
alert("Função subtrair com retorno!O resultado é:"+resultado)