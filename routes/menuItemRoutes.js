const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// save menu item
router.post('/', async(req, res)=>{
        try {
            const data = req.body;
            const newMenu = new MenuItem(data);
            const response = await newMenu.save();
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
});

// get all the data
router.get('/', async(req,res)=>{
        try{
            const response = await MenuItem.find({});
            res.status(200).json(response);
        }catch(error){
            res.status(500).json({error: 'Internal Server Error'});
        }
});


//get data taste wise
router.get('/:taste', async(req,res) => {
    try {
        const taste = req.params.taste;
        const response = await MenuItem.find({taste:taste});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

module.exports = router;