const Notes = require('../models/Notes');

module.exports = {
    viewNotes: (req, res) => {
        const data = Notes.get()
        console.log(data)
        return res.status(200).json({data})
    },
    addNotes: async (req, res) => {
        try {
            const {name, password, profession} = req.body;
            // console.log(name)
            const newData = Notes.add(req.body)
            return res.status(201).json({newData})
        } catch (error) {
            
        }
    },
    editNotes: async (req, res) => {
        try {
            const data = Notes.edit(req.body)
            return res.status(200).json({data})
        } catch (error) {
            
        }
    },
    deleteNotes: async (req, res) => {
        try {
            const data = await Notes.delete(req.params)
            return res.status(200).json({data})
        } catch (error) {
            
        }
    }
}