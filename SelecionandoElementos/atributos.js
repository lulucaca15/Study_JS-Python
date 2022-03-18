//const img = document.querySelector('img') //Pegando o primeiro elemento img
const img = document.querySelector("#imagem"); //Pegando pelo ID
// console.log(img['src'])
// console.log(img.getAttribute('src'))
// console.log(img.src)
// console.log(img.getAttribute('width'))

function alterarImagem() {
  img.setAttribute("src", "./img/grafico.png");
  //   img.src = "./img/grafico.png";
}

function alterarLink() {
  const link = document.querySelector("#link");
  link.innerHTML = "New"
}
