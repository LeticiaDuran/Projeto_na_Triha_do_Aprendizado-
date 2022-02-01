var el,i=0,ultimo=0,penultimo=1,num
el=prompt("Digite a quantidade de elementos desejados:")

  alert(i)
while(i<=el){
    num= ultimo + penultimo
    penultimo = ultimo
    ultimo=num
    i++
    alert(num)
   }

