'use strict';

/** @type {import('sequelize-cli').Migration} */
//objeto que exporta os dois métodos
module.exports = {
  // método de fazer/subir
  // criação de tabelas, inserção de dados
  async up(queryInterface, Sequelize) {
    //criação de uma tabela chamada users
    await queryInterface.createTable('users', {
      id: {
        // coluna de id
        primaryKey: true, // chave primária, coluna de identificação
        allowNull: false, // não pode ser nulo (NOTNULL)
        type: Sequelize.UUID, //id universal, cadeia de caracteres
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        // coluna de nome
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        // coluna de email
        type: Sequelize.STRING, // tipo de dado
        allowNull: false, // notnull
        unique: true, // impossivel ter dois usuários com mesmo email
      },
      password_hash: {
        // coluna de senha criptografada
        type: Sequelize.STRING, // tipo de dado
        allowNull: false, // notnull
      },
      admin: {
        // coluna pra ver se é admin ou não
        type: Sequelize.BOOLEAN, // tipo de dado
        defaultValue: false, // o valor padrão será sempre falso, pois a maioria dos usuários não serão admin
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  // método que desfaz o que eu fiz no up
  async down(queryInterface) {
    // vai dropar/excluir a tabela
    await queryInterface.dropTable('users');
  },
};
