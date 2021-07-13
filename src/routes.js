const express = require('express');
const ProdutoController = require('./controllers/ProdutoController')
const CategoriaController = require('./controllers/CategoriaController')

const VendasController = require('./controllers/VendasController')


const routes = express.Router();

routes.get('/categoria',CategoriaController.index)
routes.post('/categoria',CategoriaController.store)

routes.get('/produtos',ProdutoController.index)
routes.post('/categoria/:id_categoria/produtos',ProdutoController.store)

routes.get('/vendas',VendasController.index)
routes.post('/produtos/:id_produto/Vendas',ProdutoController.store)


module.exports = routes;