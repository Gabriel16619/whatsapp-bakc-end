/**************************************************
 * nome: Gabriel Cavalcante dos Santos
 * data: 24/09/2025
 * versão:1.0.0
 * atividade: Whatssap
 **************************************************/

const dados = require('./modulo/contatos.js')
const MESSAGE_ERROR = { status: false, statuscode: 500, development: 'Gabriel Cavalcante dos Santos' }


//getAllUsers
const getAllUsers = function(){
    let message = { status: true, statuscode: 200, development: 'Gabriel Cavalcante dos Santos', info: [] }
    dados.contatos["whats-users"].forEach(function(usuario){

        usuario.contacts.forEach(function(itemContato){
            message.info.push({
                name: itemContato.name,
                number: itemContato.number,
                description: itemContato.description,
                messages: itemContato.messages
            })
        })
    })
    
    if (message.info.length > 0)
        return message
    else
        return MESSAGE_ERROR
}
console.log(getAllUsers())

const getAllProfile = function () {

    
}


