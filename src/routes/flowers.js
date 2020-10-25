const { Router } = require('express');
const router = Router();

const { 
    getFlowers, 
    uploadFlowers,
    deleteFlowers,
} = require('../controllers/flowers.controllers');


router.get('/', getFlowers);
router.post('/upload', uploadFlowers);
router.delete('/:id/delete', deleteFlowers);


module.exports = router;