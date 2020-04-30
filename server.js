 const express = require("express"); //importando a blibioteca express
 const server = express(); //atribuindo express na var server

//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"));
server.use(express.static("assets"));

 //criei uma rota /
//e capturo o pedido do cliente para responder
server.get("/", function(req, res){
    return res.sendFile(__dirname + "/index.html")
});
 
 server.listen(3000); //chamando a var server e atribuido a porta 3000 