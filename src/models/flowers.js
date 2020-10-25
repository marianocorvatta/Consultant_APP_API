const { Schema, model } = require('mongoose');

const flowersSchema = new Schema({
    flowers: []
}, {
    timestamps: true
});

module.exports = model('Flowers', flowersSchema)
