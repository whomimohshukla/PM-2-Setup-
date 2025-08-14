const express = require("express");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  const data = { name: "John Doe", age: 30, city: "New York" };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
