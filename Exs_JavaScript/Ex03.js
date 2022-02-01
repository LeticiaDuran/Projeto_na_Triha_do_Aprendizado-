var n1,n2,n3,n4,media

n1=prompt("Digite a nota do primeiro bimestre:")
n2=prompt("Digite a nota do segundo bimestre:")
n3=prompt("Digite a nota do terceiro bimestre:")
n4=prompt("Digite a nota do quarto bimestre:")

media=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4))/4

if(media>=9 && media<=10){
  alert("Sua média bimestral é: A")
}
if(media>=8 && media<9) {
  alert("Sua média bimestral é: B")
}
if(media>=7 && media<8){
 alert("Sua média bimestral é: C")
}
if(media<7){
  alert("Sua média bimestral é: D")
}

