const Laptop = require("../model/Laptop");

const getAllLaptops = async (req, res, next) => {
    let laptops;
    try {
        laptops = await Laptop.find();
    } catch (err) {
        console.log(err);
    }

    if (!laptops) {
        return res.status(404).json({message:"No products found"})
    }
    return res.status(200).json({laptops});
};

const getById = async (req, res, next) => {
    const id = req.params.id;
    let laptop;
    try {
        laptop = await Laptop.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!laptop) {
        return res.status(404).json({message:"No data found"});
    }
    return res.status(200).json({ laptop });
};

const addLaptop = async (req, res, next) => {
    const {name,brand,description,price,available,image} = req.body;
    let laptop;
    try {
        laptop = new Laptop({
            name,
            brand,
            description,
            price,
            available,
            image
        });
        await laptop.save();
    } catch (err) {
        console.log(err);
    }
    if(!laptop) {
        return res.status(500).json({message:'Unable to Add Data'});
    }
    return res.status(201).json({ laptop });
};

const updateLaptop = async (req, res, next) => {
    const id = req.params.id;
    const {name,brand,description,price,available,image} = req.body;
    let laptop;
    try {
        laptop = await Laptop.findByIdAndUpdate(id, {
            name,
            brand,
            description,
            price,
            available,image
        });
        laptop = await laptop.save();
    } catch (err) {
        console.log(err);
    }
        if(!laptop) {
            return res.status(404).json({message:'Unable to Update Data'});
        }
        return res.status(200).json({ laptop });
};

const deleteLaptop = async (req, res, next) => {
    const id = req.params.id;
    let laptop;
    try {
        laptop = await Laptop.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if(!laptop) {
        return res.status(404).json({message:'Unable to Delete Data'});
    }
    return res.status(200).json({ message:'Data Successfully Deleted' });
}

exports.getAllLaptops = getAllLaptops;
exports.getById = getById;
exports.addLaptop = addLaptop;
exports.updateLaptop = updateLaptop;
exports.deleteLaptop = deleteLaptop;