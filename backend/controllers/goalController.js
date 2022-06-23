const asyncHandler = require('express-async-handler');
// @desc => get Goals
// @route => get api/goals
// @access => private
const getGoals = asyncHandler(async (req, res) => {


    res.status(200).json({mssg: 'Get goals'});
})


// @desc => post a goal
// @route => post api/goals
// @access => private
const setGoal = asyncHandler(async (req, res) => {

    if(!req.body.text){
      

        res.status(400)
        throw new Error("Please add a text field")
        


    }
    res.status(200).json({mssg: 'set goals'});
})

// @desc => update a goal
// @route => put api/goals/:id
// @access => private
const updateGoal = asyncHandler(async (req, res) => {

    const {id} = req.params;
    res.status(200).json({mssg: `update goal ${id}`})
})

// @desc => delete a goal
// @route => delete api/goals/:id
// @access => private
const deleteGoal = asyncHandler(async (req, res) => {

    const {id} = req.params;
    res.status(200).json({mssg: `delete goal ${id}` })
})







module.exports = {

    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}