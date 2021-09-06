const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const _=require("lodash");
let allpost=[];
const homestartingcontent = "Mark Zuckerberg was born on May 14, 1984, in White Plains, New York, and was raised in nearby Dobbs Ferry. He was born into a well-educated family and developed an interest in computer programming at an early age. ... After graduating from prep school, Zuckerberg enrolled at Harvard University.";
const aboutstartingcontent = "Mobile Legends: Bang Bang is a mobile multiplayer online battle arena developed and published by Moonton, a subsidiary of ByteDance.Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.";
const contactstartingcontent = "DS Automobiles is a French premium automotive marque founded in 2009 as a sub-marque of Citroën before becoming a standalone brand in 2015. DS plans to launch only electric and hybrid vehicles from 2025. DS can be an abbreviation of Different Spirit or Distinctive SeriesDeep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.";
const app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("static"));
app.get("/", function (req, res) {
    res.render("home");
});
app.get("/about", function (req, res) {
    res.render("about", { about: aboutstartingcontent });
});
app.get("/compose", function (req, res) {
    res.render("compose");
});
app.post("/compose", function (req, res) {
    let post = {
        title: req.body.name,
        content: req.body.blog1
    };
    allpost.push(post);
    res.redirect("/allpost");

});
app.get("/allpost/:postName",function(req,res){
    const requesttitle=_.lowerCase(req.params.postName);
    allpost.forEach(function(item){
        const storedtitle=_.lowerCase(item.title);
        if(storedtitle===requesttitle){
            res.render("main",{item1:item})

        }
        else{
            console.log("n");
        }


    });


});
app.get("/post", function(req,res){
     res.render("post");
});
app.get("/contact", function (req, res) {
    res.render("contact");
});
app.get("/allpost", function (req, res) {
    res.render("allpost" ,{home:homestartingcontent,item:allpost});
});






app.listen(3000, function (req, res) {
    console.log("Server started on port 3000");

});
