var body = document.getElementById("body")
var container = document.getElementById("container")

function exibirPopup(){
    var popup = document.createElement("div")
    var exit = document.createElement("button")

    popup.setAttribute("id", "popup")
    popup.style.position = "absolute"
    popup.style.padding = "20px"
    popup.style.paddingLeft = "60px"
    popup.style.color = "black"
    popup.style.left = "250px"
    popup.style.borderRadius = "24px"
    popup.style.top = "50px"
    popup.style.height = "50px"
    popup.style.width = "1000px"
    popup.style.backgroundColor = "white"

    exit.appendChild(document.createTextNode("X"))
    exit.setAttribute("onclick", "exit()")
    exit.style.float = "right"
    exit.style.borderRadius = "50%"
    exit.style.border = "none"
    exit.style.backgroundColor = "white"


    popup.appendChild(exit)
    popup.appendChild(document.createElement("h2").appendChild(document.createTextNode("Disciplina: Desenvolvimento WEB")))
    popup.appendChild(document.createElement("br"))
    popup.appendChild(document.createElement("h2").appendChild(document.createTextNode("Nome: João Carlos Alves Borges")))
    body.appendChild(popup)
    body.setAttribute("class", "stop-scrolling")
    window.scrollTo(0, 0)
}

container.onclick = function(){
    document.getElementById("popup").remove()
    body.removeAttribute("class", "stop-scrolling")    
}

function exit(){
    document.getElementById("popup").remove()
    body.removeAttribute("class", "stop-scrolling")
}
