/*
Operações básicas sobre dados
1) Create(criação o u inserção)
    cria um novo objeto dentro do banco de dados

2) Retrieve (recuperar ou listar)
    obter de volta um ou mais objetos preexistentes no banco de dados

3) Update
    atualizar os dados de um objeto preexistente no banco de dados

4) Delete
    exclusão de um objeto do banco de dados

(C)reate + (R)etrieve + (U)pdate + (D)elete = sigla CRUD

---------------------------------------------------------------

Verbos do protocolo HTTP

Verbo                           Operação
POST                            CREATE
GET                             RETRIEVE
PUT                             UPDATE
DELETE                          DELETE

*/

//Controler é um conjunto de funções associadas às operações sobre dados
const Curso = require('../models/Curso')

const controller = {} //Objeto vazio

//Operação CREATE, função novo()
controller.novo = async (req, res) => {
    //Usa os dados que chegam dentro do body da requisição
    //e os envia ao BD para a criação de um novo objeto
   try {
    await Curso.create(req.body)
    // http 201: Created
    res.status(201).end()
   }
   catch(erro) {
       console.log(erro)
       // http 500: Internal server error
       res.status(500).send(erro)
   }
}

module.exports = controller
