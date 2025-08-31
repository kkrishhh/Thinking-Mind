import express from "express";
const app = express();

app.get('/api/notes', (req,res)=>{
    res.status(200).send("hello world")
});

app.listen(5001, ()=>{
    console.log("app listening on localhost:5001");
})


