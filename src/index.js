const express = require ("express");
const usercontrollers= require("./controllers/user.controllers");
const app = express();
app.use(express.json());

app.use("/users",usercontrollers);


console.log(usercontrollers);
module.exports=app;