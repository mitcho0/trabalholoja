'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('categoria', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
      },
      name_categoria:{
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
    
      await queryInterface.dropTable('categoria');
     
  }
};
