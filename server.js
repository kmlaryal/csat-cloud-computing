var express = require("express");
var server = express();

var path = require("path");

function start(){
    console.log("Server is started on port 8090");
}

server.get("/", function(req, resp){
    let id = req.query.e_id;
    let name = req.query.e_name;
    let contact = req.query.e_contact;
    let city = req.query.e_city;
    let email = req.query.e_email;
    resp.send("Id: " + id + "<br /> Name: " + name + "<br /> Contact: " + contact+ "<br /> City: " + city+ "<br /> Email: " + email);
})

// server.get("/", function(req, resp){
//     resp.send("<h1>Hello World!!!");
// })

// server.get("/contact", function(req, resp){
//     resp.send("<p>We are located in Lambton College</p>")
// })

server.get("/about", function(req, resp){
    resp.send("<p>Our student are perfect</p>")
})

server.get("/about/student", function(req, resp){
    resp.send("<p>Students are perfect</p>")
})

server.get("/index", function(req, resp){
    resp.sendFile(path.join(__dirname,"/view/index.html"));
})

server.get("/contact", function(req, resp){
    resp.sendFile(path.join(__dirname,"/view/contact.html"));
})

server.get("/form", function(req, resp){
    resp.sendFile(path.join(__dirname,"/view/form.html"));
})

server.get("/*", function(req, resp){
    resp.send("<h1>Resource are not available</h1>")
})

server.listen(8090, start);

