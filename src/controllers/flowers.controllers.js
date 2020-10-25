const flowersCtrl = {};

const FlowerList = require('../models/flowers');

flowersCtrl.getFlowers = async (req, res) => {
    const flowerList = await FlowerList.find();
    res.json(flowerList);
}; 

flowersCtrl.uploadFlowers =  async (req, res) => {
    const { 
        flowers
    } = req.body;
    const flowerList = new FlowerList({flowers});
    await flowerList.save();
    res.json({message: 'Flowers uploaded'});
}; 

flowersCtrl.deleteFlowers = async (req, res) => {
    const flowerList = await FlowerList.findByIdAndDelete(req.params.id);
    res.json({message: 'List deleted'});
};

module.exports = flowersCtrl;