
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('artigos', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
      },

      id_vendas:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:'vendas',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      name_artigo:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      descricao: {
        type:Sequelize.STRING,
        allowNull:false,
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
    
      await queryInterface.dropTable('artigos');
     
  }
};
