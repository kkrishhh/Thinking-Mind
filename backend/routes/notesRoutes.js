import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).send("Notes API")
});

router.post("/", (req, res) => {
    res.status(201).send("Note created")
});

router.put("/:id", (req, res) => {
    res.status(200).send("Note updated")
});

router.delete("/:id", (req, res) => {
    res.status(200).send("Note deleted")
});

export default router;
