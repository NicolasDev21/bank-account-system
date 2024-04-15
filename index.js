const express = require('express');
const server = express();
const port = 3000;

const chalk = require('chalk');

const exphbs = require('express-handlebars');

// Definindo nossa template engine:
server.engine('handlebars', exphbs.engine());
server.set('view engine','handlebars');



// Descodificando a URL:
server.use(
    express.urlencoded({extended: true}),
);
server.use(express.json());


// Definindo nossa pasta de arquivos estáticos:
server.use(express.static('public'));


// Rota inicial:
server.get('/', (req,res) => {

    res.render('home');
});


// Rota de cadastro:
server.get('/cadaster',(req,res) => {

    res.render('cadaster');
});
server.post('/cadaster', (req, res) => {

    // Resgatando o corpo da requisição:
    const query = req.body;

    // Resgatando dados do cadastro:
    const nameAcc = query.name;
    const typeAcc = query.typeAccount;
    const selectedBank = query.selectBank;
    const cpfAcc = parseFloat(query.cpf);
    const agencyAcc = parseFloat(query.agency);
    const numberAcc = parseFloat(query.numberAccount);

    const bankAccount = {
        name: nameAcc,
        typeAccount: typeAcc,
        selectBank: selectedBank,
        cpf: cpfAcc,
        agency: agencyAcc,
        numberAccount: numberAcc
    };
    
    console.log(bankAccount);
    
    res.render('cadaster');
})



server.listen(port, () => {
    console.log(chalk.bgGreen('Servidor conectado!'));
});