// PROTOCOLO DE COMUNICAÇÃO(Http)
import { createServer } from "node:http";

// DADOS ESTATICOS
const cars = JSON.stringify([
  {
    id: "1d4f66c6-c48b-4743-ba6c-555aaafbfd0f",
    name: "Mercedes Benz",
    module: "AMG CLA 45 S",
    motor: "2.0 AMG",
  },
  {
    id: "3a15945f-95a0-476c-9187-9de5d2547137",
    name: "BMW",
    module: "M1 (E26)",
    motor: "3,5 litros (204 kW, 277 HP), 6 cilindros",
  },
  {
    id: "2da13f8f-9c45-4970-af69-1e221435b7ab",
    name: "PORSCHE",
    module: "911 Carrera",
    motor: "Motor Boxer de 3,0 litros.",
  },
]);

// PORTA PARA ACESSAR A APLICAÇÃO
const hostname = "localhost";
const port = 3001;

// EXECUTA O PACOTE CREATESERVER DO NODE
// CRIANDO O SERVIDOR
const server = createServer((req, res) => {
  /**
   * CORS = SEM ESSA IMPLEMENTAÇÃO O NAVEGADOR NÃO SABE DE ONDE ESTA 
   * VINDO A REQUISIÇÃO, POIS, O FRONT E O BACK ESTÃO RODANDO EM PORTAS DIFERENTES
   */
  // cabeçalho de cors, para o front e back se comunicarem
  res.setHeader("Access-Control-Allow-Origin", "*");

  // cabeçalho da resposta = contem um conteudo json
  res.setHeader("Content-Type", "application/json");

  //   status code(da requisiçaõ = http)
  res.statusCode = 200;

  // retorna a string json, o corpo(body) da resposta
  res.end(cars);
});

// executa o servidor na respectiva porta(3001)
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
