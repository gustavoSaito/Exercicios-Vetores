
function salvarVetor(){  

    var data = document.getElementsByClassName("valorVetor");
    var valorEntrada1 = document.getElementById("valorEntrada1").value;
    var valorEntrada2 = document.getElementById("valorEntrada2").value;
    for (var i = 0; i < data.length; i++){

        if(valorEntrada1 == data[i].value){
            var posicaoValor1 = [i];
        }if(valorEntrada2 == data[i].value){
            var posicaoValor2 = [i];
        }
    }

        if(posicaoValor1 != null){
            alert("A posição do valor 01 é" + " " + posicaoValor1 + " com o valor =" + valorEntrada1);
        }else{
            alert("Valor 01 não encontrado no vetor!");
        }
        if(posicaoValor2 != null){
            alert("A posição do valor 02 é" + " " + posicaoValor2 + " com o valor =" + valorEntrada2);
        }else{
            alert("Valor 02 não encontrado no vetor!");
        }
        
}

    




/*<!-- Leia um vetor de 12 posições e em seguida ler também dois valores X e Y quaisquer 
correspondentes a duas posições no vetor. Ao final seu programa deverá escrever a 
soma dos valores encontrados nas respectivas posições X e Y. --> */