const router = require("express").Router();

const questionsSchema = require("../models/questions");

router.post("/" , async (req , res) => {

    try {
        
        const data = await new questionsSchema(req.body).save()

        res.status(201).send({ message: "Question created successfully" , data });

    } catch (error) {
       
        res.status(400).send({ message: "Failure" , error });

    }

})

module.exports = router