const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
// const methodOverride = require('method-override')


const Product = require ('./models/product');
const constants = require("constants");

//This is like the properties you put in app.properties in Spring
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Basic route
app.get('/dogs', (req, res) => {
    res.send("WOOF")
})


//Product Index page
app.get('/products', async (req, res) => {
    const products = await  Product.find({})
    console.log(products)
    res.render('./products/index', {products})
    // res.send("All products are here")
})




app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000")
})

