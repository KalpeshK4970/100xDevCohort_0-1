var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

const express = require("express");
const app = express();
const port = 3001;

function kidneyDetails(users){
   return users[0].kidneys.length;
}
app.get("/",(req,res) => {
   
   const n =  kidneyDetails(users);
   const temp = users[0].kidneys.filter((kidney) => {
      return   kidney.healthy === true;
   })
   res.send("The number of healthy kidneys is " + temp.length)
})


app.post("/", (req,res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({msg: "Done!"})
    
})

app.put("/",(req,res) => {
    
    const temp = users[0].kidneys.filter((kidney) => {
        return   kidney.healthy === true;
     })

     if(temp.length === users[0].kindneys.length){
        // res.sendStatus(411);
        res.status(411).json({msg: "All kidneys are healthy"})
    }

     else{
        for(let i = 0 ;i < users[0].kidneys.length ; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
     }
  
})

app.delete("/",(req,res) => {
    const temp = users[0].kidneys.filter((kidney) => {
        return   kidney.healthy === true;
     })

    if(temp.length === users[0].kindneys.length){
        // res.sendStatus(411);
        res.status(411).json({msg: "You have no bad kidney"})
    }
    else{
     users[0].kidneys = temp;
     res.json({msg: "done!"})}


})

app.listen(port, () => {
    console.log("http://localhost:3001/");
})