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
         this.hasMany(models.Produtos,{foreignKey:'id_produto',as:'venda'})
     }
}

module.exports = Vendas;