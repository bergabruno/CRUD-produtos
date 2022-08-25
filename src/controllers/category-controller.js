const mongoose = require('mongoose');
const repository = require('../repositories/category-repository')

exports.get = async(req, res, next)=> {
    const data = await repository.getCategory();
    res.status(200).send(data);
}

exports.post = async(req, res, next) =>{
    try{
        let category = await  repository.create(req.body);
        console.log(category);
        res.status(201).send({message: `Criado com sucesso! id = ${category._id}`});
    }catch(erro){
        res.status(400).send({message: "erro ao cadastrar categoria"});
    }
}

exports.put = async(req,res,next) => {
    console.log(req.body)
    const id = req.params.id;
    const body = req.body;

    await repository.put(id, body);
    res.status(200).send({message: "categoria alterado com sucesso"})
}

exports.getById = async(req,res,next) => {
    const id = req.params.id;
    const data = await repository.getById(id);
    
    res.status(200).send(data);
}

exports.delete = async (req,res,next) => {
    const id = req.params.id;

    await repository.delete(id);
    res.status(200).send({message: "Categoria deletada com sucesso"});

}
