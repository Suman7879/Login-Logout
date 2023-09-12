const express = require("express");
var router = express.Router();

router.get("/home" , function (req, res){
    res.render("home")
});

router.get("/login" , function (req, res){
    res.render("login")
});
router.get("/add" , function (req, res){
    res.render("add")
});

module.exports = router;
