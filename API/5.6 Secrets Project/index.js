import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// HINTS:

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/random");
    const result = response.data;
    res.render("index.ejs", { secret: result.secret, user: result.username });
  } catch (error) {
    console.log(error.message);
    res.render("index.ejs", {
      secret: error.message,
      user: "Ocorreu um erro tente novamente mais tarde ou Recarregue a página",
    });
  }
});

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
