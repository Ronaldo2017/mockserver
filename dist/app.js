const populateCars = async () => {
  // variavel que vai conter o conteudo
  const vehicle = document.querySelector("#cars");
  // limpa o campo
  vehicle.innerHTML = "";

  // faz a conexao com o server.js, backend
  // faz a requisição(parte do client) no contexto do navegador, origem da requisição
  const response = await fetch("http://localhost:3001");
  // extrai o conteudo da resposta no formato json
  const mockCar = await response.json();

//   console.log(mockCar);

  // PERCORRE OS DADOS E INSERE NO DOCUMENTO
  for (const car of mockCar) {
    // criando elemento
    const item = document.createElement("div");
    item.className = "car";

    // criando titulo
    const name = document.createElement("h2");
    name.textContent = car["name"];
    // insere o titulo
    item.appendChild(name);

    // CRIA A TAG P
    const module = document.createElement("p");
    module.textContent = car["module"];
    module.className = "module";
    item.appendChild(module);

    const motor = document.createElement("p");
    motor.textContent = car["motor"];
    item.appendChild(motor);

    // AQUI VAI INSERIR O CONTEUDO NA DIV COM ID #CARS, NO HTML
    vehicle.appendChild(item);
  }
};

//   evento de clique no botao
document.querySelector("#description").addEventListener("click", () => {
  populateCars();
});
