const { Router } = require('express');
const router = Router();
const { 
    getAppointments, 
    createAppointment, 
    updateAppointment, 
    deleteAppointment, 
    getAppointment,
    getAppointmentsById
} = require('../controllers/appointments.controllers');


router.get('/', getAppointments);
router.get('/:consultantId', getAppointmentsById);
router.get('/:consultantId/:id', getAppointment);
router.post('/:consultantId/create', createAppointment);
router.put('/:consultantId/:id/edit', updateAppointment);
router.delete('/:consultantId/:id/delete', deleteAppointment);




module.exports = router;  