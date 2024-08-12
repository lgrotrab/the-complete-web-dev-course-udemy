const fs = require("node:fs");

fs.writeFile("message.txt", "I'm the new text", function (err) {
  if (err) throw err;
  console.log("I'm Updated!");
});

fs.appendFile("message.txt", " New Text Appended", function (err) {
  if (err) throw err;
  console.log("Text Appended");
});

fs.readFile("message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
