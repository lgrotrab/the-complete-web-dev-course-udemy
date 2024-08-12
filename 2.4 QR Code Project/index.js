import inquirer from "inquirer";
import * as fs from "node:fs";
import qr from "qr-image";

// 1. Use the inquirer npm package to get user input.
inquirer
  .prompt([
    {
      message: "Qual URL você deseja transformar em qr code",
      name: "URL",
    },
  ])
  .then((answers) => {
    // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    var qr_image = qr.image(answers.URL, { type: "png", size: 10 });
    qr_image.pipe(fs.createWriteStream("qr_img.png"));
    //3. Create a txt file to save the user input using the native fs node module.
    fs.writeFile("URL.txt", answers.URL, "utf-8", function (err) {
      if (err) throw err;
      console.log("Url File created");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      throw error;
    } else {
      throw error;
    }
  });
