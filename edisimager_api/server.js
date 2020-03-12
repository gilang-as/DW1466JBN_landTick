require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/api");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", route);

const path = require("path");
app.use(express.static(path.resolve("./public")));

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: "You are not authorized." });
  } else {
    next(err);
  }
});

app.listen(port, () => console.log(`Listening  on port : ${port}`));
