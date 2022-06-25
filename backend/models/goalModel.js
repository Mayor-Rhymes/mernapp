const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const goalSchema = Schema({

    user: {
        
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'User'


    },
    text: {


        type: String,
        required: [true, "Please add a text value"]
    }
}, {timestamp: true})

module.exports = mongoose.model('Goal', goalSchema);