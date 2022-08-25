const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const categoryRepository = require('../repositories/category-repository')



exports.getProduct = async () => {
    const result = await Product.find({}, 'title price _id description categoryId categoryName active');

    return result;
}


exports.create = async (data)=>{
    console.log(data);
    
    let category = await categoryRepository.getById(data.categoryId);
    let produto = Product(data);
    if(category.name == null){
        console.log("categoria nao existe")
    }
    produto.categoryName =  category.name;
    await produto.save();
}

exports.put = async (id,data) => {
    console.log("cheguei aqui2")
    await Product.findByIdAndUpdate(id, {
        $set:{
            title: data.title,
            description: data.description,
            price: data.price,
            categoryId: data.categoryId,
            active: data.active
        }
    });
}

exports.getById = async (id) => {

    let product = await Product.findById({_id : id}, 'title price _id description categoryId categoryName active');
    return product;
    
}

exports.delete = async (id) => {
    await Product.findByIdAndDelete(id);
    //ele desativou = active: false igual
}