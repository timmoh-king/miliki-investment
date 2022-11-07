require('dotenv').config()
const express = require("express");
const config = require("./config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const Routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser())

app.use("/api/v1", Routes);

console.log(process.env.PORT)

const PORT = process.env.PORT || 9005;

app.listen(PORT, () => 
  console.log(`Miliki-node-api running on port: ${PORT}`)
);