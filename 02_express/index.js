import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello From Pritesh");
});

app.get("/chai", (req, res) => {
  res.send("Hello From Pritesh's chai");
});

app.listen(port, () => {
  console.log(`server is running at port:${port}...`);
});
