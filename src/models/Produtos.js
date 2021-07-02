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
         this.belongsTo(models.Categoria,{foreignKey:'id_categoria',as:'produto'}),
         this.belongsTo(models.Vendas,{foreignKey:'id_produto',as:'produtos'})
     }
}

module.exports = Produtos;