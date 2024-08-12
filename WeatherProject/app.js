import express from "express";
import https from "https";

const app = express();
const url =
  "https://api.openweathermap.org/data/2.5/weather?appid=ec91bc4bf0b7fd8372bbcf76ade244cb&q=London&units=metric";

app.get("/", function (req, res) {
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData.main.temp);
      console.log(weatherData.weather[0].description);
    });
  });
  res.send("Server running");
});

app.listen(3000, function () {
  console.log("Server running in port 3000");
});
