const {Model, DataTypes} = require('sequelize')

class Categoria extends Model {
    static init(sequelize) {
        super.init({
            name_categoria:DataTypes.STRING,
            descricao:DataTypes.STRING,
            
        },{
            sequelize
        })
    }

     static associate(models){
         this.hasMany(models.Produtos,{foreignKey:'id_categoria',as:'categoria'})
     }
}

module.exports = Categoria;