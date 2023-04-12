//testando 

let hora = 23
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log("Bom dia")
} else if (hora <= 18) {
    console.log('Boa tarde')
} else if (hora >= 23) {
    console.log("Boa madrugada")
}

let idade = 12
console.log(`Você tem ${idade}`)
if (idade <= 16) {
    console.log("seu voto é opcional")
} else if (idade >= 18) {
    console.log("seu voto é obrigatorio")
}
// dias da semana 

let agora = new Date()
let diaSem = agora.getDay()

console.log(diaSem)

/*
0= domindo
1=segunda
2=terça
3=quarta
4=quinta
5=sexta
6=sabado*/

/*O Construtor  new Date()  retorna um OBJETO de DATA com: DIA da SEMANA, DATA, HORA ATUAL e FUSO HORÁRIO. Ex:
Fri Nov 04 2022 08:30:47 GMT-0300 (Horário Padrão de Brasília)

  Por ser um Construtor,  new Date()  permite-nos criar OBJETOS de DATA ESPECÍFICOS A PARTIR DELE. Para fazer isto, primeiramente, para facilitar, guarda-se o  new Date()  dentro de uma variável, desta forma:
data = new Date()
  E depois você pode usar algum destes MÉTODOS:
data.getFullYear()         Retorna o ANO atual (yyyy)
data.getMonth()	         Retorna o MÊS atual (0-11)
data.getDate()	         Retorna o DIA atual (1-31)
data.getDay()	         Retorna o DIA da SEMANA atual como um NÚMERO (0-6)
*0 = domingo; 6 = sábado.
data.getHours()	         Retorna a HORA atual (0-23)
data.getMinutes()         Retorna os MINUTOS atuais (0-59)
data.getSeconds()        Retorna os SEGUNDOS atuais (0-59)
data.getMilliseconds() Retorna os MILISSEGUNDOS atuais (0-999)
data.getTime()	         Retorna os MILISSEGUNDOS desde o dia 1 de Janeiro de 1970 (WTF? xD)*/

// switch é usado para funções, pode substituir o if e else 
//geralmente é ultilizado em situações especiicas 
switch (diaSem) {
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('segunda')
        break
    case 2:
        console.log("terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log("sabado")
        break

}