const express =require('express');
require('./config');
const products = require('./products');
const app = express();
app.use(express.json())
 app.post("/create",(req,resp)=>{
    console.log(req.body);
    resp.send("done");
});
app.listen(5000);


