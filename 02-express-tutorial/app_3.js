const express = require("express");
const app = express();
const {products} = require("./data");

app.get("/", (req,res) => {
    res.send('<h1>Hello World <a href="/api/products">products</a></h1>');
});

app.get("/api/products", (req,res) => {
    const newProducts = products.map((products) => {
        const {id,name,image} = products
        return {id,name,image}
    })
    res.json(newProducts);
});

app.get("/api/products/:proID", (req,res) => {
    const {proID} = req.params;
    const singleProducts = products.find((product) => product.id === Number(proID))
    if (!singleProducts) {
       return res.status(404).send("Product not found")
    }
    res.json(singleProducts);
});

app.get("/api/products/:proID/reviews/:reviewsID", (req,res) => {
    res.send("Hello Error")
});

app.listen(5000,() => {
    console.log("Server is running on port 5000");
});

