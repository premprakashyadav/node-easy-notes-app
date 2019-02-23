const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    name: String,
    gender: String,
    mobile: Number,
    balance: Number,
    amount: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);