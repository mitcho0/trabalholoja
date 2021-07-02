const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Produtos = require('../models/Categoria')
const Categoria = require('../models/Produtos')
const Vendas = require('../models/Vendas')

const connection = new Sequelize(dbConfig)

Produtos.init(connection)
Categoria.init(connection)
Vendas.init(connection)

Produtos.associate(connection.models)
Categoria.associate(connection.models)




module.exports = connection