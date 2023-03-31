const Petshop = require('../models/petshop')
const Product = require('../models/product')
const petshops = require('./petfood.json');

//Database
require('../database');

const addPetshopsAndPrducts = async () => {
    try {
        for(let petshop of petshops){
            const newPetShop = await new Petshop(petshop).save();
            await Product.insertMany(petshop.produtos.map(p => ({... p, petshop_id:newPetShop._id})))
        }
        console.log('Final');
    } catch (error) {
        console.error(error.message);
    }
}

addPetshopsAndPrducts();