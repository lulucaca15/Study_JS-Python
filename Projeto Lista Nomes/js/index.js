let nomes = ["luca", "Isa", "Susana", "Pedro", "Mariana"];

function carregarNomes() {
  let row = "";
  nomes.map((data) => (row += `<li class="list-group-item"> ${data} </li>`));
  document.getElementById("lista").innerHTML = row;
}

function pesquisarNomes() {
  let nome = document.getElementById('campoNome').value;
  let row = "";
  nomes.map(
    (data) =>
      nome == data && (row = `<li class="list-group-item"> ${data} </li>`)
  );
  document.getElementById("lista").innerHTML = row;
}
