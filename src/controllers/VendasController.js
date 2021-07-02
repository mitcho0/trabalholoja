const Vendas = require('../models/Vendas')
const Produtos = require('../models/Produtos')





module.exports = {
    
    async index(req,res){
        const vendas = await Vendas.findAll()
    
            return res.json(vendas)
    },
    
    
    async store(req,res){
         const {id_produto} = req.params;
         const {total_compra, data_venda} = req.body
         
         
            const produtos = await Produtos.findByPk(id_produto)
    
            if(!produtos){
            return res.status(400).json({error:'user not found'})
            }
    
            const vendas = await Vendas.create({
            total_compra,
            data_venda,
            id_produto,
           
        })

        return res.json(vendas)
    }
}