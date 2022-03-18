// const obj = document.getElementById('destaque')
// console.log(obj)

function changeContent(classList){
   const object = document.querySelector(classList)
   object.innerHTML = "teste"
   object.classList.add('destaque')
}

const obj = document.getElementsByTagName('div')
console.log(obj[0].textContent)

const lista = Array.from(obj)
console.log(lista.reduce)  //Agora pode usar métodos de arrays

const obj2 = document.getElementsByClassName('vermelho')
console.log(obj2[0].textContent)

const obj3 = document.getElementsByName('nome') //Para controle de formularios
console.log(obj3)

const obj4 = document.querySelectorAll('li.primeiro') //Para controle de formularios
console.log(obj4[1].textContent)


