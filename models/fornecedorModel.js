// model - banco de dados
const db = require("../config/firebase");
const ref = db.ref("fornecedores");

// listar
async function listar() {
    const registros = await ref.once("value");
    const dados = registros.val();

    if (!dados) return [];

    return Object.keys(dados).map(id => ({
        id,
        nome: dados[id].nome,
        cnpj: dados[id].cnpj
    }));
}

// exportar
module.exports = {
    listar
};