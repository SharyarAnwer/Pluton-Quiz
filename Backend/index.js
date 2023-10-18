require("dotenv").config();

const express = require("express");

const app = express();

const cors = require("cors");

const db = require("./db");

const userRoute = require("./routes/user");

const authRoutes = require("./routes/auth");

const questions = require("./routes/createQuestions")

const getQuestions = require("./routes/getQuestions")

const updateUser = require("./routes/updateUser")

//Connect to database
db();

//middlewares
app.use(express.json());

app.use(
  cors()
);

//routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoutes);
app.use("/api/create-questions", questions);
app.use("/api/get-questions", getQuestions);
app.use("/api/update-user", updateUser);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port: ${port}`));
