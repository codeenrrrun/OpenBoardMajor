const express =  require("express");
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
app.use(express.static("public"))
io.on("connection",(socket)=>{
    console.log(socket.id);
});
http.listen(3000,function(){
    console.log("server 1");
});
