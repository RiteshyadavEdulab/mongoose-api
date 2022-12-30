const MySql = require("mysql");
const con = MySql.createConnection({
    host:'localhost',
  
    user:'root',
    password:'root',
    database:'Student1'
});
con.connect((err)=>{
    if(err)
    {
        console.warn("error")
    }
    else
    {
        console.warn("connected")

    }
});

// con.query("select * from customers",(err,result)=>{
//     console.warn("result",result)
// })