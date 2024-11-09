// Gist1
const express = require("express")
const app = express();
const zod = require("zod");

let numberOfRequest = 0;
const schema = zod.array(zod.number());

function calculateRequests(req,res,next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
}

app.use(express.json());

app.post("/health-checkup" , calculateRequests,(req,res) => {
   
    const kidneys = req.body.kidneys;

    // performing validation
    const response = schema.safeParse(kidneys);

    res.send(response);
})

//global catch
app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry the server is down!"
    })
})

app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})

