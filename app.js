const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/handle",(req, res) => {
    res.render("handle");

})

app.listen (port, () =>{
    console.log(`server is running at ${port}`);
})