const Categoria = require("../models/Categoria");




module.exports = {

async index(req,res){
    const categoria = await Categoria.findAll()

        return res.json(categoria)
},


async store(req,res) {
    const {name_categoria, descricao} = req.body;

    const categoria = await Categoria.create({name_categoria, descricao});

    return res.json(categoria)
}






}