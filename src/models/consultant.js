const { Schema, model } = require('mongoose');

const consultantSchema = new Schema({
    name: String,
    lastName: String,
    age: Number,
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },
    phone: Number,
    psychotherapy: String,
    illnesses: String,
    meetLink: {
        type: String,
        trim: true,
    },
    active: Boolean
}, {
    timestamps: true
});


module.exports = model('Consultant', consultantSchema)
