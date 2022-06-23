const asyncHandler = require('express-async-handler');
const { cannotHaveAUsernamePasswordPort } = require('whatwg-url');
const Goal = require('../models/goalModel');
// @desc => get Goals
// @route => get api/goals
// @access => private
const getGoals = asyncHandler(async (req, res) => {
    

    const goals = await Goal.find()

    res.status(200).json(goals);
})


// @desc => post a goal
// @route => post api/goals
// @access => private
const setGoal = asyncHandler(async (req, res) => {

    if(!req.body.text){
      

        res.status(400)
        throw new Error("Please add a text field")
        


    }
    const {text} = req.body
    const goal = await Goal.create({
       text

    })
    res.status(200).json(goal);
})

// @desc => update a goal
// @route => put api/goals/:id
// @access => private
const updateGoal = asyncHandler(async (req, res) => {
    const {id} = req.params;
    const {text} = req.body;
    const goal = await Goal.findById(id) 

    if(!goal){


        res.status(400)
        throw new Error("Goal Not found")
    }

    const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, {new: true})
    
    res.status(200).json(updatedGoal)
})

// @desc => delete a goal
// @route => delete api/goals/:id
// @access => private
const deleteGoal = asyncHandler(async (req, res) => {

    const {id} = req.params;

    const goal = await Goal.findByIdAndDelete(id);
    if(!goal){
        res.status(400);
        throw new Error("Goal Not Found")
    }


    
    res.status(200).json({mssg: `deleted goal ${id}`, obj: goal })
})







module.exports = {

    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}