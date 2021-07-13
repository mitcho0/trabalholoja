'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('produtos', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
      },
      name_produto:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      preco:{
        type:Sequelize.FLOAT,
        allowNull:false,
      },
      quantidade:{
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      descricao: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      id_categoria:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:'categoria',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      created_at: {
        type:Sequelize.DATE,
        allowNull:false,
      },
    
      updated_at: {
        type:Sequelize.DATE,
        allowNull:false,
      },
    
    
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.dropTable('produtos');
     
  }
};
