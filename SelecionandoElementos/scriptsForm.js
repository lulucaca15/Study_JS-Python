const obj = document.getElementsByName('cadastro')
console.log(obj)
// console.log(document.forms)
// console.log(document.cadastro.nome)
// console.log(document.cadastro.sexo)

// document.cadastro.nome.value = "Luca"

function addValues(){
    document.cadastro.nome.value = "Luca"
    document.cadastro.email.value = "lucaoliveira846@gmail.com"
    document.cadastro.sexo.value = "masculino"
    
}
