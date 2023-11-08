const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');
const PORT = process.env.PORT || 4040;
app.use(express.json());
app.use(cors());
const studentRoutes = require("./routes/studentsEntry");
app.use("/api/v1", studentRoutes);
app.listen(PORT, () => {
  console.log(`server satarted at ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>This is My Backend HomePage </h1>`);
});
