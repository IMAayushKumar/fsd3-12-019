import express from 'express'
const app=express();

app.get("/",(req,res)=>{
    // res.end("Hello Express");
    // res.send("<h1>HEllo Express</h1>")
    res.send(`
        <h1>HELLO AAYUSH</h1>
        <h2>HELLO AAYUSH</h2>
        <h2>HELLO AAYUSH</h2>`);
})

app.get("/about",(req,res)=>{
    res.send("<h2>About the page</h2>")
})

app.get("/product",(req,res)=>{
   const product={
    id:2,
    name:"Mobile",
    price:24000,
   };
   res.send(product);
})


app.listen(4444,()=>{
    // this line must be last line 
    console.log("prg1 is running at server 4444")
})
