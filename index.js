const express = require("express");
const cors = require("cors");
const app = express();
const customers = require("./processed.json");
const { customerListHandler } = require("./handlers/customerList");
const { generateImages } = require("./handlers/generateImages");
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/user", customerListHandler);

app.get("/images/:id", generateImages);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
