const {Model, DataTypes} = require('sequelize')

class Produtos extends Model {
    static init(sequelize) {
        super.init({
            name_produto:DataTypes.STRING,
            preco:DataTypes.STRING,
            quantidade:DataTypes.STRING,
            descricao:DataTypes.STRING
        },{
            sequelize
        })
    }

     static associate(models){
     
       
     }
}

module.exports = Produtos;