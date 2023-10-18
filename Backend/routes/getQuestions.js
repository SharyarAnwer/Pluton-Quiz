const router = require("express").Router();

const questionsSchema = require("../models/questions");

router.post("/", async (req, res) => {

  try {
    console.log(req.body.subject)
    const data = await questionsSchema.find({subject : req.body.subject});
    console.log(data)
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }

});
/* router.get("/", async (req, res) => {

  try {
    console.log(req.body.subject)
    const data = await questionsSchema.find({subject : req.body.subject});
    console.log(data)
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }

}); */

module.exports = router;
