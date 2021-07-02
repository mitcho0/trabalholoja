'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('vendas', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
      },
      total_compra:{
        type:Sequelize.FLOAT,
        allowNull:false,
      },
      
      data_venda: {
        type:Sequelize.DATE,
        allowNull:false,
      },
      id_produto:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:'produtos',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      id_artigo:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:'artigos',key:'id'},
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
    
      await queryInterface.dropTable('vendas');
     
  }
};
