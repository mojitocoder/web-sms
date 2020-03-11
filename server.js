const express = require("express");
const app = express();
app.use(express.json());

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.post("/sms", (request, response) => {
  const phone = request.body.phone;
  const message = request.body.message;
  console.log(`phone: ${phone}; message: ${message}`);

  response.json({result: "Message has been sent"});
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
