const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    num_pedido: {type: Number, required: true, index: {unique: true} },
    qtd_pecas: {type: Number, required: true },
    data_coleta: {type: Date, required: false },
    data_entrega: {type: Date, required: false },
    horario_coleta: { type: String, required: false },
    horario_entrega: {type: String, required: false}, 
    cliente: { type: mongoose.ObjectId, ref: 'Cliente', required: false },
    entregador: { type: mongoose.ObjectId, ref: 'Entregador', required: false },
    lavador: { type: mongoose.ObjectId, ref: 'Lavador', required: false },
    prancha_passar: { type: mongoose.ObjectId, ref: 'PranchaPassar', required: false },
    maquina_lavar: { type: mongoose.ObjectId, ref: 'MaquinaLavar', required: false }
})
/*
Parâmetros do método mongoose.model()
1º nome do modelo(sempre igual a nome do arquivo)
2º estrutura (esquema) do modelo
3º nome da coleção(collection) em que os objetos criados a partir do modeli serão armazenados no mongo db*/
module.exports = mongoose.model('Pedido', esquema, 'pedidos')