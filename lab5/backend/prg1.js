import express from 'express'
const app=express();

app.get("/",(req,res)=>{
    res.end("Hello Express");
})


app.listen(4444,()=>{
    // this line must be last line 
    console.log("prg1 is running at server 4444")
})
