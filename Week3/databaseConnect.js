// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const jwtPassword = "123456";

// mongoose.connect(
//   "your_mongo_url",
// );

// const User = mongoose.model("User", {
//   name: String,
//   username: String,
//   pasword: String,
// });

// const app = express();
// app.use(express.json());

// function userExists(username, password) {
//   // should check in the database
// }

// app.post("/signin", async function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, "shhhhh");
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username from the database
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000);

// const express = require("express")
// const jwt = require("jsonwebtoken")
// const mongoose = require("mongoose")
// const jwtPassword = "12345"

// const app = express();
// app.use(express.json());


// mongoose.connect("mongodb://admin:lhYJYjyyMMzCRTBg@cluster0-shard-00-02.wvdhc.mongodb.net:27017/trial?replicaSet=atlas-wrnlpi-shard-0&ssl=true&authSource=admin")
// .then(() => {
//     console.log("Connected to MongoDB");
// })
// .catch((error) => {
//     console.error("Connection error:", error);
// })

// const User = mongoose.model('Users', {name: String, email: String, password: String})

//  const user = new User({name: 'Kallu' , email: "kalpes@gmail.com" , password: '1233'});
//  user.save()
//  .then(() => {
//     console.log("User saved successfully!");
// })
// .catch((error) => {
//     console.error("Error saving user:", error);
// });;
// function userExists(username , password) {

// }

// app.post('/signin', )

// app.get('/users', (req, res) => {

// })

// app.listen(3000, () => {
//     console.log("Running on port 3000");
// })

// create a signup endpoint that saves directly in db


const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const jwtPassword = "shhhhh";

const app = express()
app.use(express.json());

mongoose.connect("mongodb://admin:lhYJYjyyMMzCRTBg@cluster0-shard-00-02.wvdhc.mongodb.net:27017/trial?replicaSet=atlas-wrnlpi-shard-0&ssl=true&authSource=admin")
        .then(() => {
            console.log("DB connected successfully!")
        })
        .catch(() => {
            console.log("DB connection failed!")
        })

const User = mongoose.model( "Users" , { name: String , email: String , password: String});

app.post('/signup' , (req, res) => {

 const name = req.body.name;
 const email = req.body.email;
 const password = req.body.password;

 const user = new User({name: name , email: email , password: password});
 user.save()
    .then(() => {
        console.log("User saved successfully!")
    })
    .catch(() => {
        console.log("User not saved!")
    })

   return res.json({
    msg: "User Signed Up successfully!"
   })

})

async function userExists(name, password) {
 const user = await User.findOne({name});

 return user !== null;
}

app.post("/signin", async function (req, res) {
  const name = req.body.name;
  const password = req.body.password;

  if (!( await userExists(name, password))) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ name: name }, "shhhhh");
  return res.json({
    token,
  });

});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.name;
    // return a list of users other than this username from the database

    const allUsers = await User.find({});

    const filteredUsers = allUsers.filter( user => {
        return user.name !== username ;
    })

    return res.json(filteredUsers)

  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

