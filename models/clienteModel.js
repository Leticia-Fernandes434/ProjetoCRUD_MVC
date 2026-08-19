// model - banco de dados
const db = require("../config/firebase");
const ref = db.ref("clientes");

// listar
async function listar() {
    const registros = await ref.once("value");
    const dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome,
        email: dados[id].email
    }));
}

// exportar
module.exports = {
    listar
};