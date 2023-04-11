function clicou() {
    let n1 = Number(window.prompt("digite um numero:"))
    let n2 = Number(window.prompt("digite outro numero:"))
    let res = window.document.getElementById('resultado')
    res.innerHTML = `A soma dos dois numeros que você escolheu é ${n1+n2}!`
}