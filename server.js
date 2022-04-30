//Inyectamos la dependencia express
const express= require('express'); 
let app = express();
//Toca decirle que puerto usar 
let PORT = process.env.PORT || 3000;
//Tenemos que usar contenido estatico 
app.use('/assets', express.static(__dirname + '/public')); 
app.set('view engine', 'ejs');// EJS como motor de busqueda
//
app.get('/',(req,res)=>{
  res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css"> 
  <title>Document</title> </head>
  <body> <h1>Hola mundo !!! </h1>
  </body> </html>`)
});
//Aqui cambiamos al metodo res.render pasando parametros ID y Qstr 
app.get('/person/:id',(req,res) => {
  res.render('person', {ID: req.params.id, MESSAGE: req.query.message, TIMES:req.query.times })
  
});
//levantamos el puerto
app.listen(PORT);