const express = require("express")
const cors = require("cors")
const lowDb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")
const { nanoid } = require("nanoid")

const db = lowDb(new FileSync('db.json'))

db.defaults({ notes: [] }).write()

const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = 4000;

// app.get('/notes', (req, res) => {
//   const data = db.get("notes").value()
//   console.log(data[0])
//   return res.json(data)
// })

// app.post('/notes', (req, res) => {
//   const note = req.body
//   db.get("notes").push({
//     ...note, id: nanoid()
//   }).write()
//   res.json({ success: true })
// })

// app.put('/notes/:id', (req, res) => {
//     const note = req.body
//     const {id} = req.params
//     console.log(id)
//     // db.get("notes").find({
//     //     id: note.id
//     //   }).assign(note).value()
//     // db.write()
//     // res.json({ message: "succes update" })
//   })
const Router = require('./routes/routes');
app.use(Router);
app.listen(PORT, ()=> {
  console.log(`Backend is running on http://localhost:${PORT}`)
})

module.exports = app;