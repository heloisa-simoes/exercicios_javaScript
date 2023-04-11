window.alert("Seja bem vindo ao meu site")


function clicou() {
    let n1 = window.prompt("digite um numero e veja o dobro dele! Pode digitar:")
    let res = document.getElementById('resultado')
    res.innerHTML = `O dobro do número ${n1} é ${n1*2}`
}