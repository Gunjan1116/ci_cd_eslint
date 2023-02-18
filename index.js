const app=require("express")();

app.get("/",(req,res)=>{
    res.send("Hello!!")
})

appp.listen(5001,()=>{
    console.log("server is running at port 5001")
})