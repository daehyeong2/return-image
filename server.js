const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));

app.get("/image.jpg", (req, res) => {
  console.log(req.headers["x-forwarded-for"]);
  const imagePath = path.join(__dirname, "images", "example.jpg");
  res.setHeader("Content-Type", "image/jpeg");
  res.sendFile(imagePath);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
