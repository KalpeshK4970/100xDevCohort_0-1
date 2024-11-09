const express = require('express');
const app = express();

app.get('/health-checkups/:kidneyId' ,(req,res) => {
    const kidneyId = req.params.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "kalpesh" || password != "pass"){
        res.status(403).json({
            msg: "user does not exist"
        })
        return ;
    }
    
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "wrong input"
        })
        return ;
    }

    res.json({
        msg:"Your heart is healthy"
    })
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})