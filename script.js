let num = document.querySelector("#fnum")
let lista = document.querySelector("#flista")
let res = document.querySelector("#res")
let valor = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valor)){
        valor.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    num.value = ""
    num.focus()
}
function finalizar(){
    if (valor.length == 0){
        window.alert("Adicione valor antes de finalizar")
    }else{
        let total = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
        let media = 0
        for(let pos in valor){
            soma += valor[pos]
            if (valor[pos] > maior)
            maior = valor[pos]
            if(valor[pos] < menor)
            menor = valor[pos]
        }
        media = soma / total
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todas os valores, temos ${soma}.`
        res.innerHTML += `<p>A média foi     ${media}`
    
    }
}