var num,i,menor
var maior=0

for(i=0;i<parseFloat(5);i++)
{
    
    num=prompt("Digite um valor:")
    if(num<menor)
    {
        menor=num
    }
    if(num>maior)
    {
        maior=num
    }


}
alert("O menor número digitado foi: "+menor )
alert("O maior número digitado foi: "+maior)
