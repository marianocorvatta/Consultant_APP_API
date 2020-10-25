const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema({
    consultantId: { type: Schema.Types.ObjectId, ref: 'Consultant'},
    type: Number,
    date: {
        type: Date,
        default: Date.now,
        unique: true,
    },
    notes: String,
    flowers: [String],
    completed: Boolean,
    todo: String
}, {
    timestamps: true
});


module.exports = model('Appointment', appointmentSchema)
