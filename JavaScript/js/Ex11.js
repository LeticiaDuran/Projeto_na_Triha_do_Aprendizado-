var v=[4,8,7,6]

alert(v)//mostrar todo o vetor em tela
alert(v[1])//mostrar em tela somente o 8
v[2]=3//mudar valor de 7 para 3
alert(v)

var soma=v[0]+v[3]
alert("A soma do elemento 0 com o elemento 3 do vetor é: "+soma)

lista=["Juquinha", 1910, "Rua A", "Irati", "Pr", 80.5]

alert(lista)
alert(lista[0])

for(var i=0;i<lista.length;i++)
{
    document.write("<h2>"+lista[i]+"</h2>")//escrever as informações no .html
}

lista.push("84500-000")//adiciona a informação ao final da lista 
alert("teste")
alert(lista)

lista.pop()//remove a última informação da lista
alert(lista)

lista.shift()//remove o primeiro elemento da lista
alert(lista)
lista.unshift("Zequinha")//adiciona na primeira posição da lista
alert(lista)

var posicao
posicao=lista.indexOf("Irati")//mostra em qual posição da lista está a palavra/número 
alert(posicao)