
function validaremail(){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var vazio = document.getElementById ('write').value
    var p = document.getElementById('erro')
    if(vazio == ""){
     document.getElementById('erro').innerHTML="Ops você esqueceu de adicionar seu email!" 
    }
    else if(regex.test(vazio)){
    document.getElementById('erro').innerHTML="O endereço de email é válido"
    p.style.color = "hsl(223, 87%, 63%)"
    }
    else{
    document.getElementById('erro').innerHTML="O endereço de email é inválido"
    p.style.color = "#ff0000"
    }
}

    