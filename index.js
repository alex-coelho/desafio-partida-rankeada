// definição de nome do heroi e criacao da variavel saldoVitorias e variavel nivel
let heroi = "Jayce";
let saldoVitorias
let nivel

// chamada da funcao ConferirNivel e atribuicao do resultado a variavel 'nivel' usando como parametro a variavel 'saldoVitorias' que o retorno da funcao calcularRanking
nivel = ConferirNivel(saldoVitorias = calcularRanking(80,8))

// mensagem de saida para informar o nivel do heroi
console.log(`O herói ${heroi} tem saldo ${saldoVitorias} e está no nível ${nivel}`);


// funcao para calcular o saldo de rankeadas no calculo (vitorias - derrotas)
function calcularRanking(vitorias,derrotas) {
    let saldoVitorias
    return saldoVitorias = vitorias - derrotas;
}

// Funcao de checagem de nivel com base no saldo de vitorias
function ConferirNivel(saldoVitorias){
    let nivel
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";    
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";    
    } else {
        nivel = "Imortal";
    }
    return nivel
}
