const { Router } = require('express');
const router = Router();

const { 
    getConsultants, 
    createConsultant, 
    getConsultant, 
    updateConsultant, 
    deleteConsultant,
    updateConsultantStatus,
} = require('../controllers/consultants.controllers');


router.get('/', getConsultants);
router.post('/create', createConsultant);
router.get('/:id', getConsultant);
router.put('/edit/:id', updateConsultant);
router.patch('/edit/:id', updateConsultantStatus);
router.delete('/delete/:id', deleteConsultant);



module.exports = router;