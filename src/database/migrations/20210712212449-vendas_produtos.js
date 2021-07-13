'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vendas_produtos', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
      },
    
      id_produtos:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:'produtos',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      id_vendas:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:'vendas',key:'id'},
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
    await queryInterface.dropTable('vendas_produtos');
  }
};
