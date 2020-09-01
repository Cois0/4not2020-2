const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    ementa: {
        type: String,
        requred:true
    },
    carga_horaria: {
        type: Number,
        required: true, 
        min: 4,
        max: 80
    },
    nivel: {
        type: String,
        required: true,
        enum: ['Básico', 'Intermediário', 'Avançado']
    },
    valor_curso: {
        type: Number,
        required: true,
        default: 450,   //Valor assumido se não for informado
        min: 50
    }
})
/*
Parâmetros do método mongoose.model()
1º nome do modelo(sempre igual a nome do arquivo)
2º estrutura (esquema) do modelo
3º nome da coleção(collection) em que os objetos criados a partir do modeli serão armazenados no mongo db*/
module.exports = mongoose.model('Curso', esquema, 'cursos')