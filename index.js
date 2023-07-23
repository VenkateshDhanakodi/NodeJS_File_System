const fs = require('fs');
const express = require('express');
const path = require('path');
let app = express();
app.use(express.json());
const port = process.env.port || 8000;
//Get Request using express - Each get Request will write the current time stamp.
app.get('/timestamp',(req, res)=>{
    // storing current time stamp
    const date = new Date().toUTCString().slice(0, -4);
    // Writing the current time stamp in current-date-time file by file system and path.join()
    fs.writeFile(`${path.join(__dirname,"current-date-time.txt")}`, date,(err)=>{
        console.log("err", err)});
        // Sending the current time stamp & saved path 
        res.send({Current_TimeStamp : date, Saved_path : `${path.join(__dirname,"current-date-time.txt")}`});
})

app.listen(port, ()=>{console.log(`Listening to port ${port}`)})