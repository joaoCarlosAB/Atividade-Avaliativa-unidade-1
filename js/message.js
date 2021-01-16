var divMessage = document.getElementById("mensagem")
var btnEnviar = document.getElementById("enviar")

var numMessage = 0

btnEnviar.onclick = function(){
    var name = document.getElementById("name").value
    document.getElementById("name").value = ""
    var message = document.getElementById("message").value
    document.getElementById("message").value = ""
    
    var divElement = document.createElement("div")
    var spnElement = document.createElement("span")
    var btnElement = document.createElement("button")

    spnElement.appendChild(document.createTextNode(name + ": " + message))
    divElement.setAttribute("id", numMessage++)
    btnElement.setAttribute("onclick", "excluir(" + (numMessage - 1) + ")")
    btnElement.appendChild(document.createTextNode("Excluir"))
    

    divElement.appendChild(spnElement)
    divElement.appendChild(btnElement)

    divMessage.appendChild(divElement)
}

function excluir(id){
    document.getElementById(id).remove()
}
