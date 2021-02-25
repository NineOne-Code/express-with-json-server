const lowDb = require("lowdb")
const { nanoid } = require("nanoid")
const FileSync = require("lowdb/adapters/FileSync")
const db = lowDb(new FileSync('db.json'))
const bodyParser = require("body-parser")

module.exports = {
    get: () => {
        const data = db.get("notes").value();
        return data
    },
    add: (data) => {
        const note = data
        db.get("notes").push({
            ...note, id: nanoid()
        }).write()
        return note
    },
    edit: (data) => {
        db.get("notes").find({
            id: data.id
        }).assign(data).value()
        db.write()
        return data
    },
    delete: (id) => {
        console.log(id.id)
        const data = db.get("notes").remove({
            id: id.id
        }).write()
        return data
    }
}