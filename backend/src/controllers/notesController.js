export function getAllNotes(req, res) {
  res.status(200).send("Notes fetched succesfully")
};

export function createNote(req, res) {
    res.status(201).send("Note created")
};

export function updateNote(req, res) {
    res.status(200).send("Note updated")
}

export function deleteNote(req, res) {
    res.status(200).send("Note deleted")
}