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
const Entregador = require('../models/Entregador')

const controller = {} //Objeto vazio

//Operação CREATE, função novo()
controller.novo = async (req, res) => {
    //Usa os dados que chegam dentro do body da requisição
    //e os envia ao BD para a criação de um novo objeto
   try {
    await Entregador.create(req.body)
    // http 201: Created
    res.status(201).end()
   }
   catch(erro) {
       console.log(erro)
       // http 500: Internal server error
       res.status(500).send(erro)
   }
}

//Operação Retrieve(all), função listar()
controller.listar = async (req, res) => {
    try{
    //traz todos os cursos cadastrados
    let dados = await Entregador.find()
    res.send(dados) // Vai com status http 200
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

//Operação Retrieve(one), função obterUm
controller.obterUm = async (req, res) => {
    try{
    //Capturando o parametro id da URL
    const id = req.params.id
    let obj = await Entregador.findById(id)

    //O objeto existe e foi encontrado
    if(obj) res.send(obj) //http 200
    else res. status(404).end() //http: 404 not found
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

//Operação update, função atualizar()
controller.atualizar = async (req, res) => {
   try{
    // Isola o _id do objeto que está sendo alterado
    const id = req.body._id

    //Busca e substituição do conteúdo do objeto
    let ret = await Entregador.findByIdAndUpdate(id, req.body)

    //Se encontrou e atualizou, retornamos HTTP 204: No content
    if(ret) res.status(204).end()
    //Não encontrou o objeto para ser alterado, retorni HTTP 404: Not found
    else res.status(404).end()
   }
   catch(erro){
       console.log(erro)
       res.status(500).send(erro)
   }
}

//Operação delete, função excluir()
controller.excluir = async (req, res) => {
    try{
    //Isolando o id
    const id = req.body._id

    //Busca pelo id e exclusão
    let ret = await Entregador.findByIdAndDelete(id)

    //Encontrou e excluiu, HTTP 204: No content
    if(ret) res.status(204).end()
    //Não encontrou, HTTP 404: Not found
    else res.status(404).end()
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}
module.exports = controller
