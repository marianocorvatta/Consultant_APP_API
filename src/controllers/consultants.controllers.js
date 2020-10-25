const consultantsCtrl = {};

const Consultant = require('../models/consultant');


consultantsCtrl.getConsultants = async (req, res) => {
    const consultant = await Consultant.find();
    res.json(consultant);
}; 

consultantsCtrl.createConsultant =  async (req, res) => {
    console.log(req.body);
    const { 
        name, 
        lastName, 
        age, 
        email, 
        phone, 
        psychotherapy,
        illnesses,
        meetLink,
        active
    } = req.body;
    const newConsultant = new Consultant({
        name, 
        lastName, 
        age, 
        email, 
        phone, 
        psychotherapy,
        illnesses,
        meetLink,
        active
    });
    await newConsultant.save();
    res.json({message: 'Consultant created'});
}; 

consultantsCtrl.getConsultant = async (req, res) => {
    const consultant = await Consultant.findById(req.params.id);
    res.json(consultant);
};

consultantsCtrl.updateConsultant = async (req, res) => {
    const { 
        name, 
        lastName, 
        age, 
        email, 
        phone, 
        psychotherapy,
        illnesses,
        meetLink,
        active
    } = req.body;
    const consultant = await Consultant.findByIdAndUpdate(req.params.id, {
        name, 
        lastName, 
        age, 
        email, 
        phone, 
        psychotherapy,
        illnesses,
        meetLink,
        active
    });
    res.json({message: 'Consultant updated'});
};

consultantsCtrl.updateConsultantStatus = async (req, res) => {
    const { active } = req.body ;
    const consultant = await Consultant.updateOne(
        {'_id': req.params.id },
        {
            $set: {
                active: active
            }
        }
    );
    res.json({message: 'Consultant status updated'});
};

consultantsCtrl.deleteConsultant = async (req, res) => {
    const consultant = await Consultant.findByIdAndDelete(req.params.id);
    res.json({message: 'Consultant deleted'});
};


module.exports = consultantsCtrl;