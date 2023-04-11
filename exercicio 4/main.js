function clicou() {
    let nome = window.prompt("Por favor, me diga qual é seu nome:")
    let res = window.document.getElementById('resultado')
    res.innerHTML = `É um grande prazer te conhecer  ${nome}, seja sempre bem vinda!`
}