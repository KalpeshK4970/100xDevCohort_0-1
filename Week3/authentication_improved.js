const express = require("express")
const app = express();
const port = 3000;

function useMiddleWare(req,res,next){
 const username = req.headers.username
 const password = req.headers.password

 if(username != "kallu" || password != "pass"){
    res.status(403).json({
        msg: "User does not exist",
    });
 }
 else{
    next();
 }
};

function kidneyMiddleWare(req,res,next){
    const kidney= req.query.kidney;
    if(kidney != 1 && kidney != 2){
        res.status(411).json({
            msg: "Wrong input"
        })
    }

    else{
        next();
    }

}

app.get("/health-checkups/",useMiddleWare,kidneyMiddleWare,function(req,res){
     res.json({
        msg: "Your heart is working properly"
     })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})