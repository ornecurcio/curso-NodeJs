//const math = require('./math.js'); 
//console.log(math.add(1,2)); 

// const os = require('os');
// console.log(os.platform()); 
// console.log(os.release());

//const fs = require('fs');
// fs.writeFile('./texto.txt', 'Lucas La Puta Madre :)', function(err){
//     if(err)
//     {
//         console.log(err); 
//     }
//     console.log("archivo creado"); 
// }); 
// fs.readFile('./texto.txt', function(err, data){
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log(data.toString());
// }); 
// console.log("ultima linea de codigo"); 

/*-----CONECCION A SERVIDOR CON NODE------*/
// const http = require('http');
// const colors = require('colors');
// const handlerServer = function(req, res){
//     res.writeHead(200, { 'Content-Type': 'text/html'});
//     res.write('<h1>Hola Orne a NodeJs</h1>'); 
//     res.end(); 
// }
// //http.createServer(handlerServer).listen(3000);
// const server = http.createServer(handlerServer);

// server.listen(3000, function () {
//     console.log('server on port 3000'.magenta);
// });

/*----------Conexion a Servidor con Express-----------*/
const express = require('express');
const morgan = require('morgan');
const server = express();

//middleware procesa el dato antes de que llegue a la ruta
// function logger(req, res, next) {
//     console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`); 
//     next();
// }
/*--------Settings---------------------------------*/
server.set('AppName','Express Tutorial'); 
server.set('port', 3000); 
server.set('view engine', 'ejs'); 


//Para que express entienda el formato para datos
server.use(express.json());

//ejecucion del middleware
//server.use(logger); 

//morgan funciona como middleware
//devuelve por consola los codigos de las peticiones + info
server.use(morgan('dev')); 

//para todas las rutas user, se envia un mensaje por consola
// server.all('/user', (req, res, next)=>{
//     console.log('Por aqui paso'); 
//     next(); 
// }); 

/*------------Ruting//Peticion HTTP-----------------*/
//sirve para devolver cosas desde la web
server.get('/',(req, res)=>{
    const data = [{name: 'Orne'},{name: 'Pedro'},{name: 'Gasti'}, {name: 'Lucas'}, {name: 'Andre'}]; 
    res.render('index.ejs', {people: data}); 
}); 

server.get('/user', (req, res) => {
    res.json({
        username: "Lucas",
        lastName: "Bayon"
    });
    res.end(); 
}); 

//recibir datos y guardarlos en una base de dato
server.post('/user/:id', (req, res) => {
    console.log(req.body); //cuerpo de la peticion
    console.log(req.params); //parametros de la peticion
    res.send('<h1>POST REQUEST Received</h1>');
}); 
//actualizacion de datos y devolver cosas al navegador
server.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`); 
    res.end(); 
});
//eliminar datos dentro del servidor
server.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`);
    res.end(); 
}); 

// middleware para cargar la vista del front
server.use(express.static('public')); 


server.listen(server.get('port'), () => {
    console.log(server.get('AppName')); 
    console.log('server listening on port', server.get('port')); 
}); 