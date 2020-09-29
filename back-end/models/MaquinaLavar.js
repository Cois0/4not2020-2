const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   numero: {type: Number, required: true, index:{unique: true}},
   modelo: {type: String, required: true},
   peso_max: {type: Number, required: true},
   pedido: { type: mongoose.ObjectId, ref: 'Pedido', required: true}
})
/*
Parâmetros do método mongoose.model()
1º nome do modelo(sempre igual a nome do arquivo)
2º estrutura (esquema) do modelo
3º nome da coleção(collection) em que os objetos criados a partir do modeli serão armazenados no mongo db*/
module.exports = mongoose.model('MaquinaLavar', esquema, 'maquinas_lavar')