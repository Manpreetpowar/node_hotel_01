const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

//ADD PERSON
router.post('/', async(req,res) => {
    try {
         const data = req.body;
         const newPerson = new Person(data);
 
         const response = await newPerson.save();
         res.status(200).json(response);
 
    } catch (error) {
         console.log(error);
         res.status(500).json({error: 'Internal Server Error'});
    }
 });


 

// GET PERSONS LIST
router.get('/', async(req,res) => {
    try {
         const response = await Person.find({});
         res.status(200).json(response);
 
    } catch (error) {
         console.log(error);
         res.status(500).json({error: 'Internal Server Error'});
    }
 });



 // GET SINGLE PERSON DATA
 router.get('/:workType', async(req,res) => {
    try {
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
            const response = await Person.find({work:workType});
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work type'});
        }
       
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
 });


 // update the record

 router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // Return the updated document
            runValidators: true // Run Mongoose validation
        });

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: 'Internal server Error' });
    }
});


// delete the person
router.delete('/:id', async(req,res) => {
        try {
            const personId = req.params.id;
            const response = await Person.findByIdAndDelete(personId);

            if (!response) {
                return res.status(404).json({ error: 'Person not found' });
            }

            res.status(200).json({message: 'Person Deleted Successfully'});
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
});


 module.exports = router;