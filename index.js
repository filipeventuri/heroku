const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.send("Teste funcionando!");
})

app.listen(port, ()=>{
    console.info("aplicação rodando em: http://localhost/3000");
});