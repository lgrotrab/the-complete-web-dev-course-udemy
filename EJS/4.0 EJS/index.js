import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const date = new Date();

app.get("/", (req, res) => {
  console.log(date.getDay());
  res.render(__dirname + "/view/index.ejs", { date: date.getDay() });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
