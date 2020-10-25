const moment = require('moment');

const appointmentsCtrl = {};

const Appointment = require('../models/appointment')

appointmentsCtrl.getAppointments = async (req, res) => {
    const appointment = await Appointment.find().populate('consultantId');
    res.json(appointment);
};

appointmentsCtrl.createAppointment = async (req, res) => {
    const {
        type, 
        date, 
        notes, 
        flowers, 
        completed, 
        todo 
    } = req.body;
    const newAppointment = new Appointment({
        consultantId: req.params.consultantId,
        type,
        date: moment(date).subtract(3, 'hours'),
        notes: notes !== null ? notes : '',
        flowers: flowers !== null ? flowers : [],
        completed,
        todo: todo !== null ? todo : ''
    });
    console.log("NewAppointment:",newAppointment);
    try {
        await newAppointment.save()
        res.json({message: 'Appointment Saved'});
    } catch (e) {
        res.status(401).json({status:"error", message: "Ya existe una consulta con esta fecha y hora!", data:null});
    }
};

appointmentsCtrl.getAppointment =  async (req, res) => {
    const appointment = await Appointment.findById(req.params.id).populate('consultantId');
    res.json(appointment);
};

appointmentsCtrl.getAppointmentsById =  async (req, res) => {
    const appointments = await Appointment.find({ consultantId: req.params.consultantId });
    res.json(appointments);
};

appointmentsCtrl.updateAppointment = async (req, res) => {
    console.log("body", req.body);
    const {
        type, 
        date, 
        notes, 
        flowers, 
        completed, 
        todo 
    } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, {
        type,
        date,
        notes,
        flowers,
        completed,
        todo
    });
    res.json({message: 'Appointment updated'})
};

appointmentsCtrl.deleteAppointment = async (req, res) => {
    console.log(req.params.id);
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    res.json({message: 'Appointment deleted'});
};



module.exports = appointmentsCtrl;
