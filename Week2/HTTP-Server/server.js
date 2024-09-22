// EcmaScript -> scripting language specification standardized by Ecma

// JavaScript -> scripting language that conforms to ECMAScript specification
//            -> it has things beyond ecma specs such as DOM manipulation

// V8 Engine  -> open-source js engine developed by chromium project for google chrome in c++.
//            -> compiles js code into machine code before execution

// Node.js    -> V8 Engine + backend features

// HTTP       -> Protocol that is defined for machines to communicate
//            -> common way for websites's frontend to talk to backend

// METHODS    -> GET
//               PUT
//               POST
//               DELETE

// Common Status Code -> 200 - Everything is ok
//                       404 - Page not found
//                       403 - Authentication issues/ tying to access resources that are forbidden
//                       500 - Internal server error

const express = require("express");
const app = express();
const port = 3000;

app.get('/',(req,res) => {res.send("Hello World!")});

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`    
    )
})



