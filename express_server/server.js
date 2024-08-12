import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!<´/h1>");
});

app.get("/contact", function (req, res) {
  res.send("<p>Contact me at: luisgus.rodriguesoliveira@gmail.com</p>");
});

app.get("/about", function (req, res) {
  res.send(
    "<p>Olá, meu nome é Luis Gustavo Rodrigues Oliveira e estou em busca da minha primeira oportunidade como Web Developer, tenho 25 anos sou formado em Engenharia de Software pela UFMS e tenho experiência em desenvolvimento Mobile </p>"
  );
});

app.get("/hobbies", function (req, res) {
  res.send("<p>Games and mangás.</p>");
});

app.listen(3000, function () {
  console.log("Server is working!");
});
