const express = require("express");
const router = require("./src/routes/bookRoute");
const connectDb = require("./src/db/connection");
const dotenv = require('dotenv')

const app = express()
app.use(express.json());
dotenv.config();
connectDb();

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})