var bodyElement = document.getElementById("body")
var btnElement01 = document.getElementById("btn-color-01")
var btnElement02 = document.getElementById("btn-color-02")
var btnElement03 = document.getElementById("btn-color-03")

btnElement01.onclick = function(){
    bodyElement.style.backgroundColor = "#01087C"
}

btnElement02.onclick = function(){
    bodyElement.style.backgroundColor = "#0311FC"
}

btnElement03.onclick = function(){
    bodyElement.style.backgroundColor = "#4048C9"
}