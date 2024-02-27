const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.models.js');
const productRoute = require('./routes/product.route.js');
const app = express()

//middleware
app.use(express.json());

//route
app.use("/api/products", productRoute);



app.get( '/', (req, res) =>{
    res.send("Hello from node API Server ");
});


mongoose.connect("mongodb+srv://admin:admin@backenddb.yewf7qm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connect to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(()=>{
    console.error("Connection failed! \n" + err)
});