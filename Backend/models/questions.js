const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema({

    subject: { type: String, required: true },
    question: { type: String, required: true },
    optionOne: { type: String, required: true },
    optionTwo: { type: String, required: true },
    optionThree: { type: String, required: true },
    optionFour: { type: String, required: true },
    correctOption: { type: Number, required: true },
    
});

const questions = mongoose.model("questions" , questionsSchema)

module.exports = questions