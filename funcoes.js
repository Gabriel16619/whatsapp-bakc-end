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
 /* console.log(getAllUsers())  */

const getAllDados = function (numero) {
    let message = { status: true, statuscode: 200, development: 'Gabriel Cavalcante dos Santos', user: [] }
    dados.contatos["whats-users"].forEach(function(usuario){

        if(usuario.number === numero){
            message.user.push({
               account: usuario.account,
               nickname: usuario.nickname,
               createdSince: usuario["created-since"],
               profileImage: usuario["profile-image"],
               number: usuario.number,
               background: usuario.background
            })
        }
})
 if(message.user.length > 0){
    return message
}else {
    return MESSAGE_ERROR
} 
}
/* console.log(getAllDados("11987876567"))    */

const getAllListUsuario = function (numero){
    let message = { status: true, statuscode: 200, development: 'Gabriel Cavalcante dos Santos', profile:'', list: [] }
    dados.contatos["whats-users"].forEach(function(listUsuario){

        if(listUsuario.number === numero){
                message.profile = ({
                    name: listUsuario.name,
                    numero: listUsuario.number
                })
              }
              listUsuario.contacts.forEach(function(listDados){
                message.list.push({
                    name: listDados.name,
                    numero: listDados.number,
                    image: listDados.image,
                    description: listDados.description
                })
              })
            })
        
    
    if(message.list.length > 0){
        return message
    }else{
        return MESSAGE_ERROR
    }
}
   /* console.log(getAllListUsuario("11987876567"))    */

const getAllMensagens = function (numero){
    let message = { status: true, statuscode: 200, development: 'Gabriel Cavalcante dos Santos', profile:'', messages: [] }
    dados.contatos["whats-users"].forEach(function(listMensagens){
        if(listMensagens.number === numero)
            message.profile = ({
        name: listMensagens.name,
        numero: listMensagens.number
        })
        listMensagens.contacts.forEach(function(mensagens){
            message.messages.push({
                nome: mensagens.name,
                numero: mensagens.number,
                mensagens: mensagens.messages
            })
        })
    })
if(message.messages.length > 0){
    return message
}else{
    return MESSAGE_ERROR
}

}
 /* console.log(getAllMensagens())  */

const getAllConversaUnica = function (numeroUsuario, numeroContato){
    
    let message = { status: true, statuscode: 200, development: 'Gabriel Cavalcante dos Santos', profile:'', contatos: [] }
    dados.contatos["whats-users"].forEach(function(conversaUnica){

        if(conversaUnica.number === numeroUsuario)
            message.profile = ({
        name: conversaUnica.account,
        numero: conversaUnica.number
        })

      conversaUnica.contacts.forEach(function(mensagensDoContato){
        if(mensagensDoContato.number === numeroContato){
            message.contatos.push({
                nome: mensagensDoContato.name,
                numero: mensagensDoContato.number,
                message: mensagensDoContato.messages
            })
        }
      })
})
if(message.contatos.length > 0){
    return message
}else{
    return MESSAGE_ERROR
}
}
/* console.log(getAllConversaUnica("11987876567", "26999999963")) */

const getAllPalavraChave = function (numeroUsuario, numeroContato, palavraChave){
    let message = { status: true, statuscode: 200, development: 'Gabriel Cavalcante dos Santos', profile:'', contatos: [] }
    dados.contatos["whats-users"].forEach(function(conversaUnica){

        if(conversaUnica.number === numeroUsuario)
            message.profile = ({
        name: conversaUnica.account,
        numero: conversaUnica.number
        })

      conversaUnica.contacts.forEach(function(mensagensDoContato){
        if(mensagensDoContato.number === numeroContato){
            message.contatos.push({
                nome: mensagensDoContato.name,
                numero: mensagensDoContato.number,
                message: mensagensDoContato.messages
            })
        }
      })
      conversaUnica.contacts.forEach(function(pesquisar){
        if(pesquisar.number === palavraChave){
            message.contatos.push({
                nome: pesquisar.name,
                numero: pesquisar.number,
                message: pesquisar.messages
            })
        }
      })
})
if( message.contatos.length > 0){
    return message
}else{
    return MESSAGE_ERROR
}

}
console.log(
    JSON.stringify(getAllPalavraChave("11987876567", "26999999963", "Hello Leonid"), null,2)
)