//importando o express
import express from 'express';

// importando de dentro de routes.js
import routes from './routes';

// criação de uma classe
class App {
  // método construtor da classe
  constructor() {
    // chamar o método express para criar toda aplicação com express (app é chamado no module.exports)
    this.app = express();
    // chamando os métodos (usa o this para acessar as propriedades de dentro da classe)
    this.middlewares();
    this.routes();
  }

  // método de configuração de middlewares
  middlewares() {
    // avisando que vamos utilizar json na aplicação
    this.app.use(express.json());
  }

  //método de configuração das rotas
  routes() {
    this.app.use(routes);
  }
}

// exportando e instanciando a classe e retornando o app, que é a aplicação do express
export default new App().app;
