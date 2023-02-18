const app=require("express")();

app.get("/",(req,res)=>{
    req.send("Hello!!")
})

app.listen(5001,()=>{
    console.log("server is running at port 5001")
})