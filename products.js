const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:"string",
    price:"number",
    brand:"string",
    cateogary:"string"
});
module.exports=mongoose.model('product',productSchema);