const mongoose = require('mongoose');
const Category = mongoose.model('Category');


exports.getCategory = async () => {
    const result = await Category.find({}, 'name _id');

    return result;
}


exports.create = async (data)=>{
    console.log(data);
    let produto = Category(data);
    let category =  await produto.save();
    return category;
}

exports.put = async (id,data) => {
    console.log("cheguei aqui2")
    await Category.findByIdAndUpdate(id, {
        $set:{
            name: data.name
        }
    });
}

exports.getById = async (id) => {

    let category = await Category.findById({_id : id}, 'name _id');
    return category;
    
}

exports.delete = async (id) => {
    await Category.findByIdAndDelete(id);
}