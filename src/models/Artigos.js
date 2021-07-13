const {Model, DataTypes} = require('sequelize')

class Artigos extends Model {
    static init(sequelize) {
        super.init({
            name_Artigos:DataTypes.STRING,
            descricao:DataTypes.STRING,
            
        },{
            sequelize
        })
    }

     static associate(models){
        this.belongsTo(models.Vendas,{foreignKey:'id_vendas',as:'artigos'})
     }
}

module.exports = Artigos;