const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    num_pedido: {type: Number, required: true, index: {unique: true} },
    qtd_pecas: {type: Number, required: true },
    data_coleta: {type: Date, required: true },
    data_entrega: {type: Date, required: true },
    horario_coleta: { type: String, required:true },
    horario_entrega: {type: String, required: true}, 
    cliente: { type: mongoose.ObjectId, ref: 'Cliente', required: true }
})
/*
Parâmetros do método mongoose.model()
1º nome do modelo(sempre igual a nome do arquivo)
2º estrutura (esquema) do modelo
3º nome da coleção(collection) em que os objetos criados a partir do modeli serão armazenados no mongo db*/
module.exports = mongoose.model('Pedido', esquema, 'pedidos')