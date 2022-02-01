var val, dolar,real,moeda

val=prompt("Digite o valor a ser convertido:")
moeda=prompt("Digite a moeda atual:(D)Dólar ou (R)Reais")

    
if(moeda=="D")
{
    real=val*5.44
    alert(val+" dólares convertidos em reais:"+real)
}
if(moeda=="R")
{
  
    dolar=val/5.44
    alert(val+" reais convertidos em dólar:"+dolar)
}


    


