const Cliente = require('./cliente');

(async () => {
    const database = require('./db');
    const Cliente = require('./cliente');
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();

const resultadoCreate = await Cliente.create({
    name: 'Vitor',
    age: 12,
    balance: 10,
    id: 1,
})

console.log(resultadoCreate);

//Read unção findByPk para trazer apenas um produto baseado na primary-key da tabela (id)
const cliente = await Cliente.findByPk(1);
console.log(cliente)

//Update
const cliente = await Cliente.findByPk(1);
cliente.name = "Vitor Vasconcelos";

const resultadoSave = await cliente.save();
console.log(resultadoSave);

const cliente = await Cliente.findByPk(1);
cliente.destroy();