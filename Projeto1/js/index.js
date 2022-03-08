var hora = new Date().getHours()
var saudacao

hora < 12 ? saudacao = "Bom dia" : hora < 18 ? saudacao = "Boa tarde" : saudacao = "Boa noite"
document.getElementById("mensagem").innerHTML = saudacao

function calculaPreço(){
    alert("Teste")
}

function insertHTML(){
    document.getElementById('inner').innerHTML = "Consegui"
}