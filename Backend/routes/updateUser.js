const router = require("express").Router();

const { User } = require("../models/user");

router.put("/", async (req, res) => {
  try {

    const result = await User.updateOne(
      { _id: req.body._id },
      { $set: { score: req.body.score} }
    );

    return res.status(200).send({ message: "I AM WORKING FINE", result });
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
