const {Model, DataTypes} = require('sequelize')

class Vendas extends Model {
    static init(sequelize) {
        super.init({
            total_compra:DataTypes.FLOAT,
            data_venda:DataTypes.DATE,
           
        },{
            sequelize
        })
    }

     static associate(models){
         this.belongsToMany(models.Produtos, { foreignKey: 'id_produtos', through: 'vendas_produtos', as: 'vendas' }),
         this.hasMany(models.Artigos, {foreignKey:'id_vendas',as:'venda'})
     }
}

module.exports = Vendas;