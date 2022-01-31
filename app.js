const express = require('express');
const path = require('path');
//path unir rutas

const app = express();

const publicPath=path.resolve(__dirname, './public');
app.use(express.static(publicPath));

/*app.get('/', (req,res) =>{
    res.send ('Bienvenido');
});*/

app.get('/mercado_liebre', (req,res) =>{
    res.sendFile(path.join(__dirname,'/views/home.html')); 
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('*', (req,res) =>{
    res.send("Lo siento, no puedes acceder");
});

app.listen(process.env.PORT || 3000, function (){
    console.log('servidor corriendo')
});
