import express from "express";
import notesRoutes from "./routes/notesroutes.js"
const app = express();
app.use("/api/notes",notesRoutes.js)

//     app.get('/api/notes', (req,res)=>{
//         res.status(200).send("create your notes")/// An endpoint is a combination of a URL + HTTP method that lets the client interact with a specific resource.
//     })
//     app.post('/api/notes', (req, res) => {
//         res.status(201).send("note created succesfully")// we created 4 endpoints
//     })
//     app.put('/api/notes/:id', (req, res) =>{
//         res.status(200).send("note updated succesfully")
//     })
//     app.delete('/api/notes/:id', (req, res) =>{
//         res.status(200).send("note deleted succesfully")
//     })
// app.listen(5001, ()=>{
//     console.log("app listening on localhost:5001");
// })


