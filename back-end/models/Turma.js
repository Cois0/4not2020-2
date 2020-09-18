const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   nome: {type: String, required: true },
   data_inicial: {type: Date, required: true },
   data_final: {
       type: Date, 
       required: true,
       validade: {
           validator: function(valor) {
               return valor >= this.data_inicial
           },
           message: () => 'A data final deve ser maior ou igual à data inicial'
       }
    },
   dias_semana: [{
       type: String,
       required: true, 
       enum: ['dom', 'seg', "ter", 'qua', 'qui', 'sex', 'sáb']
   }],
   // Valores que usam apenas a data de hora de uma data 
   //são manipulados mais facilmente como string
   horario_inicial: { type: String, required:true },
   horario_final: {type: String, required: true}, 
   curso: { type: mongoose.ObjectId, ref: 'Curso', required: true },
   professor: { type: mongoose.ObjectId, ref: 'Professor', required: true},
   sala_aula: { type: mongoose.ObjectId, ref: 'SalaAula', required: true}
})
/*
Parâmetros do método mongoose.model()
1º nome do modelo(sempre igual a nome do arquivo)
2º estrutura (esquema) do modelo
3º nome da coleção(collection) em que os objetos criados a partir do modeli serão armazenados no mongo db*/
module.exports = mongoose.model('Turma', esquema, 'turmas')