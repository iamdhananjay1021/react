const express = require("express");
const app = express();




app.get("/api/products",(req,res)=>{
const product = [
    {
        id:1,
        name:"table wooden",
        price:1234,
    },
    {
        id:2,
        name:"table glass",
        price:1234,
    },
    {
        id:3,
        name:"table polyster",
        price:1234,
    },
    {
        id:4,
        name:"table grass",
        price:1234,
    },
    
]


if(req.query.search){
  const filterProducts = product.filter(product=>product.name.includes(req.query.search))
  res.send(filterProducts);
  return;
}
setTimeout(()=>{
    res.send(product)
},3000);

})



const port = process.env.PORT || 9000




app.listen(port,()=>{
    console.log("Server is running....");
    
})