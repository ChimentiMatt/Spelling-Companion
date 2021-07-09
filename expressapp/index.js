const express = require("express");
const nodemon = require("nodemon");
const app = express();
const port = 8000;
const fs = require("fs");
const { uuid } = require("uuidv4");
const jwt = require("jsonwebtoken");

const secret = require('./secrets.js')

const bcrypt = require("bcrypt");

const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${secret}cluster0.diafp.mongodb.net/spellingdb`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})





// needed since req is an object!
var bodyParser = require("body-parser");
const { ESRCH } = require("constants");

app.use(bodyParser.json());
app.use(express.json());

app.post("/spellinglist", function (req, res) {
  const list = req.body.spellingList;
  console.log(list, "object");
  let spellingArray = [];

  fs.readFile("./words.txt", function (err, data) {
    if (err) throw err;
    console.log(data, "read data");
    spellingArray = JSON.parse(data);
    console.log(spellingArray.dictionary, "dictionary from file");
    list.forEach((element) => {
      spellingArray.dictionary.push(element);
    });
    // spellingArray.dictionary.push(list)
    console.log(spellingArray.dictionary, "spell array");

    fs.writeFile(
      "./words.txt",
      JSON.stringify({ dictionary: spellingArray.dictionary }),
      function (err) {
        if (err) throw err;
        console.log("Done");

        res.send(spellingArray);
      }
    );
  });
});

app.get("/spellinglist", function (req, res) {
  const list = req.body.spellingList;
  console.log(list, "object");
  let spellingArray = [];

  fs.readFile("./words.txt", function (err, data) {
    if (err) throw err;
    console.log(data, "read data");
    spellingArray = JSON.parse(data);
    console.log(spellingArray.dictionary, "dictionary from file");
    spellingArray.dictionary.push(list);
    console.log(spellingArray.dictionary, "spell array");

    res.send(spellingArray);
  });
});

// { dictionary: []}

//Users
app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.users.password, salt);
    console.log(salt);
    console.log(
      hashedPassword,
      "!!!!!!!!!!!!!!!!!HASHED!!!!!!!!!!!!!!!!!!!!!!!!"
    );
    let objBody = req.body.users;
    let userArray = [];

    fs.readFile("./users.txt", function (err, data) {
      if (err) throw err;
      console.log(data, "read data");
      userArray = JSON.parse(data);
      console.log(userArray, "*User Array*");
      objBody = { ...objBody, id: uuid(), password: hashedPassword };
      console.log(objBody);
      userArray.users.push(objBody);

      console.log(userArray.users, "Test");
      fs.writeFile(
        "./users.txt",
        JSON.stringify({ users: userArray.users }),
        function (err) {
          if (err) throw err;
          console.log("Done");

          res.send(userArray);
        }
      );
    });
  } catch {
    res.status(500).send();
  }
});

// function Authenticate(req, res, next) {
//   users.findOne({ email: req.body.email }, function (err, userInfo) {
//     if (err) {
//       next(err);
//     } else {
//       if (
//         userInfo != null &&
//         bcrypt.compareSync(req.body.password, userInfo.password)
//       ) {
//         const token = jwt.sign({ id: userInfo._id }, req.app.get("secretKey"), {
//           expiresIn: "1h",
//         });
//         // res.send({status:'success', message: 'user found!', data:{ user:userInfo, token:token}})
//         res.send({ token });
//       } else {
//         res.send({
//           status: "error",
//           message: "invalid email/password!",
//           data: null,
//         });
//       }
//     }
//   });
// }

mongoose.connect('mongodb://localhost/spellingdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.listen(port, () => {
  console.log(`app is listening on host ${port}`);
});
