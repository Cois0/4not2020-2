const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    formacao: { type: String, requred:true },
    data_nascimento: { type: Date, required: true },
    //Índice único impede duplicidade de CPFs no cadastro
    cpf: { type: String, required: true, index: {unique: true} },
    rg: { type: String, required: true },
    valor_hora_aula: {type: Number, required: true, min: 15.0, default: 20.75 },
    endereco: { type: String, required: true },
    telefone: { type: String, required: true },
    //Índice único impede duplicidade de emails no cadastro
    email: { type: String, required: true, index: {unique: true} }
})
/*
Parâmetros do método mongoose.model()
1º nome do modelo(sempre igual a nome do arquivo)
2º estrutura (esquema) do modelo
3º nome da coleção(collection) em que os objetos criados a partir do modeli serão armazenados no mongo db*/
module.exports = mongoose.model('Professor', esquema, 'professores')