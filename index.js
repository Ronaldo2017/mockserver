// MJS(ES Modules) = PADRÃO DE MÓDULOS NOS NAVEGADORES(JS MODERNO) = SENDO ADOTADO PELO NODE.JS
// INCLUÍDO O PROTOCOLO HTTP
import { createServer } from 'node:http';

// NOME E PORTA PARA ACESSAR A APLICAÇÃO
const hostname = '127.0.0.1';
const port = 3000;

// EXECUTA O PACOTE CREATESERVER DO NODE
const server = createServer((req, res) => {
 
  res.end('Aplicação Web rodando com module(mjs) configurado no arquivo packge.json(propriedade type)');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
