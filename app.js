const express = require('express');


const app = express();

//criar uma rota
app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas</h1>');
})

app.listen(3000, () => {
    console.log('Servidor iniciado')
})
