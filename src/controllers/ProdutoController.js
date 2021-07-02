const Categoria = require('../models/Categoria');
const Produtos = require('../models/Produtos');


module.exports = {
    
    async index(req,res){
        const produtos = await Produtos.findAll()
    
            return res.json(produtos)
    },
    
    
    
    
    async produto_categoria(req,res){
        const {id_categoria} = req.params;

        const categoria = await Categoria.findByPk(id_categoria , {
            include:{
                
                association:'produtos'
            }
        })
        return res.json(categoria);
    },
    
    
    async store(req,res){
         const {id_categoria} = req.params;
         const {name_produto, preco, quantidade,descricao} = req.body
    
            const categoria = await Categoria.findByPk(id_categoria)
    
            if(!categoria){
            return res.status(400).json({error:'user not found'})
            }
    
            const produtos = await Produtos.create({
            name_produto,
            preco,
            quantidade,
            descricao,
            id_categoria,
        })

        return res.json(produtos)
    }
}