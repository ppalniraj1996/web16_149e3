const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Bhupesh kumawat</h1>");
});

app.post("/users", (req, res) => {
  console.log(req.body);
  fs.readFile("./db.json", { encoding: "utf-8" },
 (error, data)=>{
  const parsed = JSON.stringify(data);
  parsed.products = [...parsed.products, req.body];

  fs.writeFile(
    "./db.json",
    JSON.stringify(parsed),
    { encoding: "utf-8" },
    (err, data) => {
      res.status(201).send("product Created!");
    }
  );
});
res.status(201).send("Producted Created!");
});
app.listen(8080, () => {
  console.log("Started Port on http://localhost8080");
});
