const {Model, DataTypes} = require('sequelize')

class Produtos extends Model {
    static init(sequelize) {
        super.init({
            name_produto:DataTypes.STRING,
            preco:DataTypes.FLOAT,
            quantidade:DataTypes.INTEGER,
            descricao:DataTypes.STRING
        },{
            sequelize
        })
    }

     static associate(models){
         this.belongsTo(models.Categoria,{foreignKey:'id_categoria',as:'produto'}),
         this.belongsToMany(models.Vendas, { foreignKey: 'id_vendas', through: 'vendas_produtos', as: 'produtos' })
     }
}

module.exports = Produtos;