const express = require('express');
const app = express();
const port = 8080;
const path = require('path');



app.use("/" , require('./route'));

app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname, "./views"))

app.listen(port,()=>{
    console.log(`App is Listing at http://localhost:${port}`)
});
