
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Note = new Schema({
    _id_a: {
        type: 'String',
        required: true
    },
    dateCreated: {
        type: 'String',
        required: true
    },
    noteContent: {
        type: 'String',
        required: true
    }
}, {
    timestamps: true,
})

const newNote = mongoose.model('note', Note);

module.exports = newNote;